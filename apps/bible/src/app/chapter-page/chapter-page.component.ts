import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input as RouteInput } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { initBible } from "../+state/bibles/bibles.actions";
import { BooksActions } from "../+state/books/books.actions";
import { selectAllBooks } from "../+state/books/books.selectors";
import { ChaptersActions } from "../+state/chapters/chapters.actions";
import { selectAllChapters, selectChaptersError, selectChaptersLoaded } from "../+state/chapters/chapters.selectors";
import { Chapter } from "../models/chapters";
import { ChapterItemComponent } from "./chapter-item/chapter-item.component";

@Component({
  selector: "app-chapter-page",
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule, ChapterItemComponent, MatSnackBarModule],
  templateUrl: "./chapter-page.component.html",
  styleUrl: "./chapter-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterPageComponent {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageName: string;

  public chapters$!: Observable<Chapter[]>;
  public isLoading$!: Observable<boolean>;
  public isLoaded$!: Observable<boolean>;
  public selectedBook$!: Observable<string>;
  public allChapter!: Chapter;

  constructor(private store: Store, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.allChapter = { number: "all", bibleId: this.bibleId, bookId: this.bookId, id: "all" } as Chapter;

    this.store.dispatch(initBible());
    this.store.dispatch(BooksActions.loadBooks({ id: this.bibleId }));
    this.store.dispatch(ChaptersActions.loadChapters({ id: this.bibleId, bookId: this.bookId }));

    this.chapters$ = this.store.select(selectAllChapters);
    this.selectedBook$ = this.store.select(selectAllBooks).pipe(map((r) => r.find((b) => b.id == this.bookId)?.name));

    this.isLoading$ = this.store.select(selectChaptersLoaded).pipe(map((r) => !r));
    this.isLoaded$ = this.store.select(selectChaptersLoaded);

    this.store.select(selectChaptersError).subscribe((error) => {
      if (error) {
        console.error(`${(error as any).message}`);
        this._snackBar.open(`An error has occured. Please try again later.`, "", {
          horizontalPosition: "center",
          verticalPosition: "top",
          duration: 7000,
          politeness: "assertive",
        });
      }
    });
  }

  getScripture(chapter: Chapter) {
    this.store.dispatch(ChaptersActions.selectChapter({ id: chapter.id }));

    this.router.navigateByUrl(
      `tongue/${this.languageName}/bible/${this.bibleId}/book/${this.bookId}/chapter/${chapter.id}`
    );
  }
}
