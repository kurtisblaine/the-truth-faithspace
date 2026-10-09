import { CommonModule, KeyValuePipe } from "@angular/common";
import { Component, computed, effect, OnDestroy, Signal, signal, ViewEncapsulation } from "@angular/core";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleChange, MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatChipSelectionChange, MatChipsModule } from "@angular/material/chips";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatSelectModule } from "@angular/material/select";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { flatMap } from "lodash-es";
import { Subscription, take } from "rxjs";
import { SeoBaseComponent, tileSlideIn } from "shared";
import { bookDateRanges } from "../+state/items.database";
import { Tag, TagColorMap, TagKey } from "../+state/items/items.models";
import { ItemEntity } from "../+state/items/items.reducer";
import { selectAllItems, selectAllTags } from "../+state/items/items.selectors";
import { GroupedTagsComponent } from "./grouped-tags/grouped-tags.component";
import { ProphesyTileComponent } from "./prophesy-tile/prophesy-tile.component";
import { TagService } from "./tag.service";

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
    MatPaginatorModule,
    MatSelectModule,
    MatIconModule,
    GroupedTagsComponent,
    KeyValuePipe,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [tileSlideIn],
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent extends SeoBaseComponent implements OnDestroy {
  public allTags!: Signal<Tag[]>;
  public allColorTags = signal<Map<string, Tag[]>>(TagColorMap);
  public filteringOption = signal<"include" | "exclude">("include");
  public selectedTagsControl = new FormControl<Tag[]>([]);

  private readonly ALL_BOOKS = "All";
  public selectedBook = signal<string>(this.ALL_BOOKS);
  public allBooks: string[] = [this.ALL_BOOKS, ...bookDateRanges.map((b) => b.book)];

  public initialPageSize = 15;
  public pageSize = signal(this.initialPageSize);
  public pageIndex = signal(0);

  private subscription!: Subscription;

  readonly filteredTags: Signal<Map<string, Tag[]>> = computed(() => {
    if (this.filteringOption() === "include") {
      return this.allColorTags();
    } else {
      const filteredTags = this._removeDuplicates(flatMap(this.filteredItems(), (a) => a.tags));
      const availableTags = [...this.allColorTags().entries()].filter(([_, tags]) =>
        tags.some((tag) => filteredTags.some((t) => t === tag))
      );

      return new Map(availableTags);
    }
  });

  public items!: Signal<ItemEntity[]>;

  readonly selectedTags = signal<Tag[]>([]);
  readonly filteredItems = computed(() => {
    const activeTags = this.selectedTags();
    const selectedBook = this.selectedBook();

    if (!activeTags.length && selectedBook === this.ALL_BOOKS) return this.items();

    const filteredItems = this.items().filter((item) => {
      const shouldFilterByBook = item?.bookDateRange?.book === selectedBook;
      const shouldIncludeAllBooks = selectedBook === this.ALL_BOOKS;

      const shouldFilterByTag =
        this.filteringOption() === "include"
          ? activeTags.some((tag) => item.tags.includes(tag))
          : activeTags.every((tag) => item.tags.includes(tag));
      const shouldIncludeAllTags = !activeTags.length;

      return (shouldFilterByBook || shouldIncludeAllBooks) && (shouldFilterByTag || shouldIncludeAllTags);
    });

    return filteredItems;
  });

  readonly pagedItems = computed(() => {
    const startIndex = this.pageIndex() * this.pageSize();
    const endIndex = startIndex + this.pageSize();
    const pagedItems = this.filteredItems().slice(startIndex, endIndex);
    return pagedItems;
  });

  readonly total = computed(() => this.filteredItems().length);

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private tagService: TagService
  ) {
    super({
      description: `“We have the prophetic word made more sure, to which you do well to pay attention as to a lamp shining in a dark
  place, until the day dawns and the morning star arises in your hearts. But know this first of all, that no prophecy of
  Scripture is a matter of one's own interpretation, for no prophecy was ever made by an act of human will, but men
  moved by the Holy Spirit spoke from God.” (2 Peter 1:19-21)`,
    });

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
      this.pageIndex.set(0);

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

    effect(() => {
      const availableTags = [...this.filteredTags().entries()];
      const availableGroupTags = availableTags.filter(([_, value]) => value.length > 1);
      if (this.filteringOption() === "include") {
        availableGroupTags.forEach(([key, groupTags]) => {
          if (groupTags.length && this.tagService.tagGroupSignalMap.has(key)) {
            const filterSignaler = this.tagService.tagGroupSignalMap.get(key);
            filterSignaler.next([]);
          }
        });
      } else {
        availableGroupTags.forEach(([key, groupTags]) => {
          if (groupTags.length && this.tagService.tagGroupSignalMap.has(key)) {
            const filterSignaler = this.tagService.tagGroupSignalMap.get(key);
            const filteredTags = this._removeDuplicates(flatMap(this.filteredItems(), (a) => a.tags));
            const filteredGroupTags = groupTags.filter((tag) => filteredTags.some((t) => t === tag));
            filterSignaler.next(filteredGroupTags);
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  isFilteringActive() {
    return (this.selectedBook() && this.selectedBook() !== this.ALL_BOOKS) || this.selectedTags().length;
  }

  onFilterOptionChange(event: MatButtonToggleChange): void {
    this.filteringOption.set(event.value);
    this.reset();
  }

  onPageChange(event?: PageEvent): void {
    this.pageIndex.update(() => event.pageIndex);
    this.pageSize.update(() => event.pageSize);
  }

  reset() {
    this.pageIndex.set(0);
    this.selectedTagsControl.reset([]);
    this.tagService.reset.next(true);
    this.selectedBook.update(() => this.ALL_BOOKS);
  }

  toggleTags($event: { tags: Tag[]; event: MatChipSelectionChange }) {
    $event.tags.forEach((tag) => this.toggleTag(tag, $event.event));
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
