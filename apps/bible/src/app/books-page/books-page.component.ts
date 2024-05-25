import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatExpansionModule } from "@angular/material/expansion";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { initBooks } from "../+state/book/books.actions";
import { BooksEntity } from "../+state/book/books.models";
import { selectAllBooks } from "../+state/book/books.selectors";

@Component({
  selector: "app-books-page",
  standalone: true,
  imports: [MatExpansionModule, CommonModule],
  templateUrl: "./books-page.component.html",
  styleUrl: "./books-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksPageComponent implements OnInit {
  public books$!: Observable<BooksEntity[]>;

  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    this.store.dispatch(initBooks());

    this.books$ = this.store.select(selectAllBooks);
  }
}
