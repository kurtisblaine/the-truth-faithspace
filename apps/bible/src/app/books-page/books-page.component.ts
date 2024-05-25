import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatTreeModule } from "@angular/material/tree";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { initBooks } from "../+state/book/books.actions";
import { selectAllBooks } from "../+state/book/books.selectors";
import { BibleBook, BookNode, ScriptDirection } from "../+state/models/bibles";
@Component({
  selector: "app-books-page",
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: "./books-page.component.html",
  styleUrl: "./books-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksPageComponent implements OnInit {
  public rtl: ScriptDirection = "RTL";
  public books$!: Observable<BibleBook[]>;
  public nodes$!: Observable<BookNode[]>;

  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    this.store.dispatch(initBooks());

    this.books$ = this.store.select(selectAllBooks);
  }
}
