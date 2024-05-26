import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as _ from "lodash-es";
import { Observable, map } from "rxjs";
import { initBible } from "../+state/book/books.actions";
import {
  selectAllGroupedLanguages,
  selectBooksLoaded,
} from "../+state/book/books.selectors";
import {
  BibleBook,
  ScriptDirection,
  SortedBooks,
} from "../+state/models/bibles";
@Component({
  selector: "app-bible-page",
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
  ],
  templateUrl: "./bible-page.component.html",
  styleUrl: "./bible-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiblePageComponent implements OnInit {
  public rtl: ScriptDirection = "RTL";
  public groups$!: Observable<SortedBooks[]>;
  public isLoading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    this.store.dispatch(initBible());

    this.groups$ = this.store.select(selectAllGroupedLanguages);
    this.isLoading$ = this.store.select(selectBooksLoaded).pipe(map((r) => !r));
  }

  public getCountries(sortedBooks: BibleBook[]) {
    const flattened = _.flatMap(sortedBooks, (g) => g.countries);
    const dedupped = [...new Set(flattened.map((f) => f.name))];
    return dedupped.join(", ");
  }

  public getScripts(sortedBooks: BibleBook[]) {
    const flattened = _.flatMap(sortedBooks, (g) => g.language);
    const dedupped = [...new Set(flattened.map((f) => f.script))];
    return dedupped.join(", ");
  }

  public readBook(book: BibleBook) {
    this.router.navigateByUrl("book/" + book.id, {
      state: { book },
    });
  }
}
