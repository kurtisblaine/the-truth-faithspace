import { CdkVirtualScrollViewport, ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, Input as RouteInput, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, Subscription, map } from "rxjs";
import { BibleApiService } from "../+state/bible-api.service";
import { initBible } from "../+state/bibles/bibles.actions";
import { BooksActions } from "../+state/books/books.actions";
import { selectAllBooks } from "../+state/books/books.selectors";
import { ChaptersActions } from "../+state/chapters/chapters.actions";
import { selectChapterEntity, selectChaptersCount } from "../+state/chapters/chapters.selectors";
import { Scripture } from "../models/scripture";
import { MyDataSource } from "./data-source";

@Component({
  selector: "app-scripture-page",
  standalone: true,
  imports: [CommonModule, MatCardModule, ScrollingModule, MatRippleModule],
  templateUrl: "./scripture-page.component.html",
  styleUrl: "./scripture-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  dataSource: MyDataSource;

  ngOnInit(): void {
    this.store.dispatch(initBible());
    this.store.dispatch(BooksActions.loadBooks({ id: this.bibleId }));
    this.store.dispatch(ChaptersActions.loadChapters({ id: this.bibleId, bookId: this.bookId }));
    // this.store.dispatch(BooksActions.selectBook({ id: this.bookId }));

    this.isAll = this.chapterId == "all";
    this.scripture$ = this.bibleApi.getScripture(this.bibleId, this.chapterId);
    this.chapter$ = this.store.select(selectChapterEntity).pipe(map((r) => r.number));

    this.selectedBook$ = this.store.select(selectAllBooks).pipe(map((r) => r.find((c) => c.id == this.bookId)?.name));

    if (this.isAll) {
      this.subscription = this.store.select(selectChaptersCount).subscribe((total) => {
        this.chapterCount = total;
        this.dataSource = new MyDataSource(this.bibleApi, this.bibleId, this.bookId, total);
      });
    } else {
      this.activeChapter = this.chapterId.split(".").pop();
      this.bibleApi.getScripture(this.bibleId, `${this.bookId}.${this.chapterId}`);
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
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
