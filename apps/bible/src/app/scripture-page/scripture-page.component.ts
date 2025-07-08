import { CdkVirtualScrollViewport, ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { Component, OnDestroy, OnInit, Input as RouteInput, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subject, Subscription, bufferCount, filter, from, map, mergeMap } from "rxjs";
import { BibleApiService } from "../+state/bible-api.service";
import { BooksActions } from "../+state/books/books.actions";
import { selectEntity } from "../+state/books/books.selectors";
import { ChaptersActions } from "../+state/chapters/chapters.actions";
import { selectChapterEntity, selectChaptersCount } from "../+state/chapters/chapters.selectors";
import { Scripture } from "../models/scripture";
import { MyDataSource } from "./data-source";

@Component({
  selector: "app-scripture-page",
  imports: [CommonModule, MatCardModule, ScrollingModule, MatRippleModule, MatDividerModule, MatProgressSpinnerModule],
  templateUrl: "./scripture-page.component.html",
  styleUrl: "./scripture-page.component.scss",
  providers: [],
})
export class ScripturePageComponent implements OnInit, OnDestroy {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageName: string;
  @RouteInput() public chapterId: string;

  @ViewChild(CdkVirtualScrollViewport, { static: true })
  private cdkVirtualScrollViewport!: CdkVirtualScrollViewport;

  public selectedBook$!: Observable<string>;

  constructor(private store: Store, private router: Router, private bibleApi: BibleApiService) {}

  public scripture$!: Observable<Scripture>;
  public isLoading$!: Observable<boolean>;
  public chapter$!: Observable<string>;
  public chapterCount!: number;
  public isAll!: boolean;
  public activeChapter!: string;
  public subscription!: Subscription;
  public dataSubsciption!: Subscription;
  public dataSource: MyDataSource;
  private requestQueue = new Subject<number>();
  public items: { chapter: number; content: any; verseCount: number }[] = [];

  ngOnInit(): void {
    this.isAll = this.chapterId == "all";
    this.scripture$ = this.bibleApi.getScripture(this.bibleId, this.chapterId);
    this.chapter$ = this.store.select(selectChapterEntity).pipe(map((r) => r.number));

    this.selectedBook$ = this.store.select(selectEntity).pipe(map((r) => r.name));

    if (this.isAll) {
      this.subscription = this.store.select(selectChaptersCount).subscribe((total) => {
        this.chapterCount = total;

        this.dataSource = new MyDataSource(this.bibleApi, this.bibleId, this.bookId, total);

        this.dataSubsciption = this.requestQueue
          .pipe(
            filter((r) => {
              return r < total;
            }),
            bufferCount(1),
            mergeMap((requests) =>
              from(requests).pipe(mergeMap((startIndex) => this.dataSource.fetchData(startIndex, 5)))
            )
          )
          .subscribe((data: { chapter: number; content: any; refresh: boolean; verseCount: number }[]) => {
            if (data.some((r) => r.refresh)) {
              const dataToRefresh = data.filter((r) => r.refresh);
              this.items.splice(dataToRefresh[0].chapter, dataToRefresh.length, ...dataToRefresh);

              this.items = [...this.items];
            }
          });
      });
    } else {
      this.activeChapter = this.chapterId.split(".").pop();
      this.bibleApi.getScripture(this.bibleId, `${this.bookId}.${this.chapterId}`);
    }
  }

  trackBy(index: number, item: { chapter: number; content: any }) {
    return item.chapter;
  }

  onScrollIndexChange(index: number) {
    this.requestQueue.next(index);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.dataSubsciption) {
      this.dataSubsciption.unsubscribe();
    }
  }

  calculateContainerHeight() {
    this.cdkVirtualScrollViewport.checkViewportSize();
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
