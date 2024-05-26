import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { initBooks } from "../+state/book/books.actions";
import {
  selectAllGroupedLanguages,
  selectBooksLoaded,
} from "../+state/book/books.selectors";
import { ScriptDirection, SortedBooks } from "../+state/models/bibles";

@Component({
  selector: "app-books-page",
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./books-page.component.html",
  styleUrl: "./books-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksPageComponent implements OnInit {
  public rtl: ScriptDirection = "RTL";
  public books$!: Observable<SortedBooks[]>;
  public isLoading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    this.store.dispatch(initBooks());

    this.books$ = this.store.select(selectAllGroupedLanguages);
    this.isLoading$ = this.store.select(selectBooksLoaded).pipe(map((r) => !r));
  }
}
