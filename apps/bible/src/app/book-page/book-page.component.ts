import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, Input as RouteInput } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { selectTranslationEntity } from "../+state/bibles/bibles.selectors";
import { BooksActions } from "../+state/books/books.actions";
import { selectAllBooks, selectBooksError, selectBooksLoaded } from "../+state/books/books.selectors";
import { Book } from "../models/books";

@Component({
  selector: "app-book-page",
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule, MatListModule, MatSnackBarModule],
  templateUrl: "./book-page.component.html",
  styleUrl: "./book-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPageComponent implements OnInit {
  @RouteInput() public bibleId: string;
  @RouteInput() public languageName: string;

  public books$!: Observable<Book[]>;
  public isLoading$!: Observable<boolean>;
  public translation$!: Observable<string>;

  constructor(private store: Store, private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit() {
    this.store.dispatch(BooksActions.loadBooks({ id: this.bibleId }));

    this.books$ = this.store.select(selectAllBooks);
    this.isLoading$ = this.store.select(selectBooksLoaded).pipe(map((r) => !r));
    this.translation$ = this.store.select(selectTranslationEntity).pipe(map((r) => r.name));

    this.store.select(selectBooksError).subscribe((error) => {
      if (error)
        this._snackBar.open((error as any).message, "Dismiss", {
          horizontalPosition: "center",
          verticalPosition: "top",
        });
    });
  }

  getChapters(book: Book) {
    this.store.dispatch(BooksActions.selectBook({ id: book.id }));

    this.router.navigateByUrl(`tongue/${this.languageName}/bible/${this.bibleId}/book/${book.id}/chapter`);
  }
}
