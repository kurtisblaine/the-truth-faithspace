import { CommonModule } from "@angular/common";
import { Component, computed, Signal, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";
import { Store } from "@ngrx/store";
import { flatMap } from "lodash-es";
import { SeoBaseComponent, tileSlideIn } from "shared";
import { Tag } from "../+state/items.database";
import { ItemsActions } from "../+state/items/items.actions";
import { ItemEntity } from "../+state/items/items.reducer";
import { selectAllItems, selectAllTags } from "../+state/items/items.selectors";
import { environment } from "../../environments/environment";
import { ProphesyTileComponent } from "./prophesy-tile/prophesy-tile.component";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, ProphesyTileComponent, MatChipsModule, MatButtonModule],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [tileSlideIn],
})
export class HomePageComponent extends SeoBaseComponent {
  public allTags!: Signal<Tag[]>;

  readonly filteredTags = computed(() => {
    const allTags = flatMap(this.filteredItems(), (a) => a.tags);
    return Array.from(new Set(allTags)) as Tag[];
  });

  readonly selectedTags = signal<Tag[]>([]);

  public items!: Signal<ItemEntity[]>;
  readonly filteredItems = computed(() => {
    const activeTags = this.selectedTags();

    if (!activeTags.length) return this.items();

    return this.items().filter((item) => activeTags.every((tag) => item.tags.includes(tag)));
  });

  constructor(private store: Store) {
    super({ canonicalUrl: environment.baseUrl, description: "TODO" });

    this.store.dispatch(ItemsActions.loadItems());

    this.items = this.store.selectSignal(selectAllItems);
    this.allTags = this.store.selectSignal(selectAllTags);
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
