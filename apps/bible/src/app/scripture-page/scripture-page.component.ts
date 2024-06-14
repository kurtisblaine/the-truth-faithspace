import { CollectionViewer, DataSource } from "@angular/cdk/collections";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input as RouteInput,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { BehaviorSubject, Observable, Subscription, map } from "rxjs";
import { BibleApiService } from "../+state/bible-api.service";
import { selectEntity } from "../+state/books/books.selectors";
import {
  selectChapterEntity,
  selectChaptersCount,
} from "../+state/chapters/chapters.selectors";
import { Scripture } from "../models/scripture";

@Component({
  selector: "app-scripture-page",
  standalone: true,
  imports: [CommonModule, MatCardModule, ScrollingModule],
  templateUrl: "./scripture-page.component.html",
  styleUrl: "./scripture-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScripturePageComponent implements OnInit {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageId: string;
  @RouteInput() public chapterId: string;

  public selectedBook$!: Observable<string>;

  constructor(
    private store: Store,
    private router: Router,
    private bibleApi: BibleApiService
  ) {}

  public scripture$!: Observable<Scripture>;
  public isLoading$!: Observable<boolean>;
  public chapter$!: Observable<string>;
  public chapterCount!: number;
  dataSource: MyDataSource;

  ngOnInit(): void {
    this.scripture$ = this.bibleApi.getScripture(this.bibleId, this.chapterId);
    this.chapter$ = this.store
      .select(selectChapterEntity)
      .pipe(map((r) => r.number));

    this.store.select(selectChaptersCount).subscribe((total) => {
      this.chapterCount = total;
      this.dataSource = new MyDataSource(
        this.bibleApi,
        this.bibleId,
        this.bookId,
        total
      );
    });

    this.selectedBook$ = this.store
      .select(selectEntity)
      .pipe(map((r) => r.name));
  }
}

export class MyDataSource extends DataSource<string | undefined> {
  private _pageSize = 1;
  private _cachedData = Array.from<string>({ length: this.totalChapters });
  private _fetchedPages = new Set<number>();
  private readonly _dataStream = new BehaviorSubject<(string | undefined)[]>(
    this._cachedData
  );
  private readonly _subscription = new Subscription();

  constructor(
    private bibleApi: BibleApiService,
    private bibleId: string,
    private bookId: string,
    private totalChapters: number
  ) {
    super();
  }

  connect(
    collectionViewer: CollectionViewer
  ): Observable<(string | undefined)[]> {
    this._subscription.add(
      collectionViewer.viewChange.subscribe((range) => {
        const startPage = this._getPageForIndex(range.start);
        const endPage = this._getPageForIndex(range.end - 1);
        for (let i = startPage; i <= endPage; i++) {
          const index = i === 0 ? "intro" : i.toString();
          this._fetchPage({ index, page: i });
        }
      })
    );
    return this._dataStream;
  }

  disconnect(): void {
    this._subscription.unsubscribe();
  }

  private _getPageForIndex(index: number): number {
    return Math.floor(index / this._pageSize);
  }

  private _fetchPage(result: { index: string; page: number }) {
    if (this._fetchedPages.has(result.page)) {
      return;
    }
    this._fetchedPages.add(result.page);

    this.bibleApi
      .getScripture(this.bibleId, `${this.bookId}.${result.index}`)
      .subscribe((r) => {
        this._cachedData.splice(
          result.page * this._pageSize,
          this._pageSize,
          ...[r.data.content]
        );
        this._dataStream.next(this._cachedData);
      });

    // setTimeout(() => {
    //   this._cachedData.splice(
    //     page * this._pageSize,
    //     this._pageSize,
    //     ...Array.from({ length: this._pageSize }).map(
    //       (_, i) => `Item #${page * this._pageSize + i}`
    //     )
    //   );
    //   this._dataStream.next(this._cachedData);
    // }, Math.random() * 1000 + 200);
  }
}
