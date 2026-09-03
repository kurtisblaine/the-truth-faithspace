import { CommonModule } from "@angular/common";
import { Component, computed, effect, OnDestroy, Signal, signal, ViewEncapsulation } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleChange, MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatChipSelectionChange, MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { flatMap } from "lodash-es";
import { Subscription, take } from "rxjs";
import { SeoBaseComponent, tileSlideIn } from "shared";
import { bookDateRanges } from "../+state/items.database";
import { Tag, TagKey } from "../+state/items/items.models";
import { ItemEntity } from "../+state/items/items.reducer";
import { selectAllItems, selectAllTags } from "../+state/items/items.selectors";
import { ProphesyTileComponent } from "./prophesy-tile/prophesy-tile.component";

@Component({
  selector: "app-home-page",
  imports: [
    CommonModule,
    ProphesyTileComponent,
    MatChipsModule,
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [tileSlideIn],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent extends SeoBaseComponent implements OnDestroy {
  public allTags!: Signal<Tag[]>;
  public filteringOption = signal<"include" | "exclude">("include");
  public selectedTagsControl = new FormControl<Tag[]>([]);

  private readonly ALL_BOOKS = "All";
  public selectedBook = signal<string>(this.ALL_BOOKS);
  public allBooks: string[] = [this.ALL_BOOKS, ...bookDateRanges.map((b) => b.book)];

  private subscription!: Subscription;

  readonly filteredTags: Signal<Tag[]> = computed(() => {
    if (this.filteringOption() === "include") {
      return this.allTags();
    } else {
      const allTags = flatMap(this.filteredItems(), (a) => a.tags);
      return this._removeDuplicates(allTags);
    }
  });

  public items!: Signal<ItemEntity[]>;

  readonly selectedTags = signal<Tag[]>([]);
  readonly filteredItems = computed(() => {
    const activeTags = this.selectedTags();
    const selectedBook = this.selectedBook();

    if (!activeTags.length && selectedBook === this.ALL_BOOKS) return this.items();

    return this.items().filter((item) => {
      const shouldFilterByBook = item?.bookDateRange?.book === selectedBook;
      const shouldIncludeAllBooks = selectedBook === this.ALL_BOOKS;

      const shouldFilterByTag =
        this.filteringOption() === "include"
          ? activeTags.some((tag) => item.tags.includes(tag))
          : activeTags.every((tag) => item.tags.includes(tag));
      const shouldIncludeAllTags = !activeTags.length;

      return (shouldFilterByBook || shouldIncludeAllBooks) && (shouldFilterByTag || shouldIncludeAllTags);
    });
  });

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
    super();

    this.items = this.store.selectSignal(selectAllItems);
    this.allTags = this.store.selectSignal(selectAllTags);

    this.subscription = this.route.queryParams.pipe(take(1)).subscribe((queryParams) => {
      const queryParamTags = queryParams["tags"] as string;
      if (queryParamTags) {
        const tagList = (queryParamTags.split(",") as TagKey[]).map((key) => Tag[key]);
        this.selectedTags.update((tags) => [...tags, ...tagList]);
        this.selectedTagsControl.setValue(this.selectedTags());
      }

      const queryParamBook = queryParams["book"] as string;
      if (queryParamBook) {
        const result = queryParamBook.replace(/^(\d)/, "$1 ");
        this.selectedBook.update(() => this.allBooks.find((book) => book === result));
      }

      const queryParamFilter = queryParams["filter"] as "include" | "exclude";
      if (queryParamFilter) {
        this.filteringOption.update(() => queryParamFilter);
      }
    });

    effect(() => {
      const selectedTagKeys = this.selectedTags().map((tag) => Object.keys(Tag)[Object.values(Tag).indexOf(tag)]);
      const allTags = this._removeDuplicates(selectedTagKeys).reduce((query, tag, index) => {
        if (index === 0) query += tag;
        else query += `,${tag}`;
        return query;
      }, "");

      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          tags: allTags ? allTags : null,
          book: this.selectedBook()?.replace(" ", ""),
          filter: this.filteringOption(),
        },
        queryParamsHandling: "replace",
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  isFilteringActive() {
    return (this.selectedBook() && this.selectedBook() !== this.ALL_BOOKS) || this.selectedTags().length;
  }

  onFilterOptionChange(event: MatButtonToggleChange): void {
    this.selectedTagsControl.reset([]);
    this.filteringOption.set(event.value);
  }

  reset() {
    this.selectedTagsControl.reset([]);
    this.selectedBook.update(() => this.ALL_BOOKS);
  }

  toggleTag(tag: Tag, event: MatChipSelectionChange) {
    if (event.selected) {
      this.selectedTags.update((tags) => [...tags, tag]);
    } else {
      this.selectedTags.update((tags) => tags.filter((t) => t !== tag));
    }
  }

  _removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }
}
