import { CommonModule } from "@angular/common";
import { Component, computed, effect, OnDestroy, Signal, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleChange, MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { ActivatedRoute, Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { flatMap } from "lodash-es";
import { Subscription, take } from "rxjs";
import { SeoBaseComponent, tileSlideIn } from "shared";
import { Tag, TagKey } from "../+state/items.database";
import { ItemEntity } from "../+state/items/items.reducer";
import { selectAllItems, selectAllTags } from "../+state/items/items.selectors";
import { ProphesyTileComponent } from "./prophesy-tile/prophesy-tile.component";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, ProphesyTileComponent, MatChipsModule, MatButtonModule, MatButtonToggleModule, FormsModule],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [tileSlideIn],
})
export class HomePageComponent extends SeoBaseComponent implements OnDestroy {
  public allTags!: Signal<Tag[]>;
  public updateFilteredItems = signal<string>(null);
  public filteringOption = signal<"include" | "exclude">("include");

  private subscription!: Subscription;

  readonly filteredTags: Signal<Tag[]> = computed(() => {
    if (this.filteringOption() === "include") {
      return this.allTags();
    } else {
      const allTags = flatMap(this.filteredItems(), (a) => a.tags);
      return Array.from(new Set(allTags)) as Tag[];
    }
  });

  readonly selectedTags = signal<Tag[]>([]);

  public items!: Signal<ItemEntity[]>;
  readonly filteredItems = computed(() => {
    const activeTags = this.selectedTags();

    if (!activeTags.length) return this.items();

    return this.items().filter((item) =>
      this.filteringOption() === "include"
        ? activeTags.some((tag) => item.tags.includes(tag))
        : activeTags.every((tag) => item.tags.includes(tag))
    );
  });

  constructor(private store: Store, private router: Router, private route: ActivatedRoute) {
    super();

    this.items = this.store.selectSignal(selectAllItems);
    this.allTags = this.store.selectSignal(selectAllTags);

    this.subscription = this.route.queryParams.pipe(take(1)).subscribe((queryParams) => {
      const queryParamTags = queryParams["tags"] as string;
      if (!queryParamTags) return;

      const tagList = (queryParamTags.split(",") as TagKey[]).map((key) => Tag[key]);

      this.selectedTags.update((tags) => [...tags, ...tagList]);
    });

    effect(() => {
      const selectedTagKeys = this.selectedTags().map((tag) => Object.keys(Tag)[Object.values(Tag).indexOf(tag)]);
      const allTags = this._removeDuplicates(selectedTagKeys).reduce(
        (query, tag, index) => (query += index === 0 ? tag : `,${tag}`),
        ""
      );

      this.router.navigate([], {
        relativeTo: this.route,
        queryParams: {
          tags: allTags ? allTags : null,
          filter: this.filteringOption(),
        },
        queryParamsHandling: "replace",
      });
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  isSelected(tag: string) {
    return this.selectedTags().some((t) => t === tag);
  }

  onFilterOptionChange(event: MatButtonToggleChange): void {
    this.filteringOption.set(event.value);
  }

  resetTags() {
    this.selectedTags.set([]);
  }

  toggleTag(tag: Tag, isSelected: boolean) {
    if (isSelected) {
      this.selectedTags.update((tags) => [...tags, tag]);
    } else {
      this.selectedTags.update((tags) => tags.filter((t) => t !== tag));
    }
  }

  _removeDuplicates<T>(arr: T[]): T[] {
    return [...new Set(arr)];
  }
}
