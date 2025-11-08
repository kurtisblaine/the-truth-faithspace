import { CdkVirtualScrollViewport, ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  computed,
  OnDestroy,
  OnInit,
  Input as RouteInput,
  signal,
  ViewChild,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { CdkDynamicSizeVirtualScroll, itemDynamicSize } from "@rdlabo/ngx-cdk-scroll-strategies";
import {
  bufferCount,
  distinctUntilChanged,
  filter,
  from,
  map,
  mergeMap,
  Observable,
  scan,
  Subject,
  Subscription,
} from "rxjs";
import { SafeHtmlPipe } from "shared";
import { BibleApiService } from "../+state/bible-api.service";
import { BooksActions } from "../+state/books/books.actions";
import { selectEntity } from "../+state/books/books.selectors";
import { ChaptersActions } from "../+state/chapters/chapters.actions";
import { selectChapterEntity, selectChaptersCount } from "../+state/chapters/chapters.selectors";
import { Scripture } from "../models/scripture";
import { MyDataSource } from "./data-source";
import { ElementMeasureService } from "./height-measure.service";

type DynamicScripture = { chapter: number; content: any; verseCount: number; refresh: boolean };
@Component({
  selector: "app-scripture-page",
  imports: [
    CommonModule,
    MatCardModule,
    ScrollingModule,
    MatRippleModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    CdkDynamicSizeVirtualScroll,
    SafeHtmlPipe,
  ],
  templateUrl: "./scripture-page.component.html",
  styleUrl: "./scripture-page.component.scss",
  providers: [],
})
export class ScripturePageComponent implements OnInit, OnDestroy, AfterViewInit {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageName: string;
  @RouteInput() public chapterId: string;

  @ViewChild(CdkVirtualScrollViewport)
  private cdkVirtualScrollViewport!: CdkVirtualScrollViewport;

  public selectedBook$!: Observable<string>;

  constructor(
    private store: Store,
    private router: Router,
    private bibleApi: BibleApiService,
    private measureService: ElementMeasureService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  public scripture$!: Observable<Scripture>;
  public isLoading$!: Observable<boolean>;
  public chapter$!: Observable<string>;
  public chapterCount!: number;
  public isAll!: boolean;
  public activeChapter!: string;
  public subscription!: Subscription;
  public dataSubscription!: Subscription;
  public scrollSubscription!: Subscription;
  public dataSource: MyDataSource;

  private requestQueue = new Subject<number>();
  private viewportWidth = signal(0);

  private readonly initialFetchAmount = 2;

  private readonly sectionMarginTop = 4;
  private readonly headerMarginBottom = 14;
  private readonly divider = 1;
  private readonly headerDiv = 36;
  private readonly headerSection = this.headerDiv + this.headerMarginBottom + this.divider;

  public items = signal<DynamicScripture[]>([]);
  readonly dynamicSize = computed<itemDynamicSize[]>(() =>
    this.items()
      .map((item) => ({
        trackId: item.chapter,
        itemSize: this.measureService.measureElementHeight("div", item.content, {
          "line-height": "27px",
          width: this.viewportWidth().toString() + "px",
        }),
      }))
      .map((result) => ({
        trackId: result.trackId,
        itemSize: result.itemSize + this.headerSection + this.sectionMarginTop,
      }))
  );

  ngOnInit(): void {
    this.isAll = this.chapterId == "all";
    this.scripture$ = this.bibleApi.getScripture(this.bibleId, this.chapterId);
    this.chapter$ = this.store.select(selectChapterEntity).pipe(map((r) => r.number));

    this.selectedBook$ = this.store.select(selectEntity).pipe(map((r) => r.name));

    if (this.isAll) {
      this.subscription = this.store.select(selectChaptersCount).subscribe((total) => {
        this.chapterCount = total;

        this.dataSource = new MyDataSource(this.bibleApi, this.bibleId, this.bookId, total);

        this.dataSubscription = this.requestQueue
          .pipe(
            filter((r) => r < total),
            bufferCount(1),
            scan((acc, requests) => ({ count: acc.count + 1, requests }), { count: 0, requests: [] as number[] }),
            mergeMap((data) =>
              from(data.requests).pipe(
                mergeMap((startIndex) =>
                  this.dataSource.fetchData(startIndex, data.count === 1 ? this.initialFetchAmount : 1)
                )
              )
            )
          )
          .subscribe((data: DynamicScripture[]) => {
            if (data.some((r) => r.refresh)) {
              const dataToRefresh = data.filter((r) => r.refresh);
              this.items.update((currentItems) => [...currentItems, ...dataToRefresh]);

              //TODO - fix why this isn't updating!
              // this.cdkVirtualScrollViewport.checkViewportSize();
              // this.changeDetectorRef.detectChanges();
              // (this.cdkVirtualScrollViewport as any)._changeDetectorRef.detectChanges();
            }
          });
      });
    } else {
      this.activeChapter = this.chapterId.split(".").pop();
      this.bibleApi.getScripture(this.bibleId, `${this.bookId}.${this.chapterId}`);
    }
  }

  ngAfterViewInit(): void {
    const { width } = this.cdkVirtualScrollViewport.elementRef.nativeElement.getBoundingClientRect();
    if (width) this.viewportWidth.set(width);

    this.scrollSubscription = this.cdkVirtualScrollViewport
      .elementScrolled()
      .pipe(
        map(() => this._getIndex()),
        filter((index) => !!index),
        distinctUntilChanged()
      )
      .subscribe((index) => this.onScrollIndexChange(index));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.dataSubscription) {
      this.dataSubscription.unsubscribe();
    }

    if (this.scrollSubscription) {
      this.scrollSubscription.unsubscribe();
    }
  }

  trackBy(index: number, item: { chapter: number; content: any }) {
    return item.chapter;
  }

  onScrollIndexChange(index: number) {
    this.requestQueue.next(index);
  }

  private _getIndex() {
    const scrollHeight =
      this.cdkVirtualScrollViewport.measureScrollOffset("top") +
      Math.ceil(this.cdkVirtualScrollViewport.elementRef.nativeElement.getBoundingClientRect().height);

    const totalHeight = this.dynamicSize().reduce((totalHeight, dynamicSize) => {
      totalHeight += dynamicSize.itemSize;
      return totalHeight;
    }, 0);

    if (scrollHeight >= totalHeight) {
      return this.dynamicSize().length;
    }
  }

  public onPreviousArrowClick(scripture: Scripture) {
    this.store.dispatch(ChaptersActions.selectChapter({ id: scripture.data.previous.id }));
    this.store.dispatch(BooksActions.selectBook({ id: scripture.data.previous.bookId }));

    this.router.navigateByUrl(
      `tongue/${this.languageName}/bible/${this.bibleId}/book/${scripture.data.previous.bookId}/chapter/${scripture.data.previous.id}`,
      { onSameUrlNavigation: "reload", replaceUrl: true }
    );
  }

  public onNextArrowClick(scripture: Scripture) {
    this.store.dispatch(ChaptersActions.selectChapter({ id: scripture.data.next.id }));
    this.store.dispatch(BooksActions.selectBook({ id: scripture.data.next.bookId }));

    this.router.navigateByUrl(
      `tongue/${this.languageName}/bible/${this.bibleId}/book/${scripture.data.next.bookId}/chapter/${scripture.data.next.id}`,
      { onSameUrlNavigation: "reload", replaceUrl: true }
    );
  }
}
