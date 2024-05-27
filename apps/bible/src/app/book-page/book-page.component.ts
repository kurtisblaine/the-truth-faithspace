import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input as RouteInput,
} from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { BooksActions } from "../+state/books/books.actions";
import {
  selectAllBooks,
  selectBooksLoaded,
} from "../+state/books/books.selectors";
import { Book } from "../models/books";

@Component({
  selector: "app-book-page",
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule, MatListModule],
  templateUrl: "./book-page.component.html",
  styleUrl: "./book-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookPageComponent implements OnInit {
  @RouteInput() public bibleId: string;
  @RouteInput() public languageId: string;

  public books$!: Observable<Book[]>;
  public isLoading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(BooksActions.loadBooks({ id: this.bibleId }));

    this.books$ = this.store.select(selectAllBooks);
    this.isLoading$ = this.store.select(selectBooksLoaded).pipe(map((r) => !r));
  }

  getChapters(book: Book) {
    this.router.navigateByUrl(
      `tongue/${this.languageId}/bible/${this.bibleId}/book/${book.id}/chapter`
    );
  }
}
