import { CommonModule } from "@angular/common";
import { Component, computed, OnDestroy, Signal, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatChipsModule } from "@angular/material/chips";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { flatMap } from "lodash-es";
import { Subscription } from "rxjs";
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
  public filteringOption: "include" | "exclude" = "include";

  private subscription!: Subscription;

  readonly filteredTags = computed(() => {
    const allTags = flatMap(this.filteredItems(), (a) => a.tags);
    return Array.from(new Set(allTags)) as Tag[];
  });

  readonly selectedTags = signal<Tag[]>([]);

  public items!: Signal<ItemEntity[]>;
  readonly filteredItems = computed(() => {
    const activeTags = this.selectedTags();
    const _ = this.updateFilteredItems(); //this is to merely manually update the filtered items.

    if (!activeTags.length) return this.items();

    return this.items().filter((item) =>
      this.filteringOption === "include"
        ? activeTags.some((tag) => item.tags.includes(tag))
        : activeTags.every((tag) => item.tags.includes(tag))
    );
  });

  constructor(private store: Store, private route: ActivatedRoute) {
    super();

    this.items = this.store.selectSignal(selectAllItems);
    this.allTags = this.store.selectSignal(selectAllTags);

    this.subscription = this.route.queryParams.subscribe((queryParams) => {
      const queryParamTags = queryParams["tags"] as string;
      if (!queryParamTags) return;

      const tagList = (queryParamTags.split(",") as TagKey[]).map((key) => Tag[key]);

      this.selectedTags.update((tags) => [...tags, ...tagList]);
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  updateFilter() {
    this.updateFilteredItems.update((value) => (value += "."));
  }

  isSelected(tag: string) {
    return this.selectedTags().some((t) => t === tag);
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
}
