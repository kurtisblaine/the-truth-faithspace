import { Component, input, OnInit, Signal } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { Store } from "@ngrx/store";
import { SeoBaseComponent } from "shared";
import { ItemEntity } from "../+state/items/items.reducer";
import { getByUrl } from "../+state/items/items.selectors";

@Component({
  selector: "app-prophesy-item-page",
  imports: [MatCardModule, MatChipsModule],
  templateUrl: "./prophesy-item-page.component.html",
  styleUrl: "./prophesy-item-page.component.scss",
})
export class ProphesyItemPageComponent extends SeoBaseComponent implements OnInit {
  public title = input.required<string>(); //from input

  public item!: Signal<ItemEntity>;

  constructor(private store: Store) {
    super({ description: "TODO" });
  }

  showTagsSorted = () => Object.values(this.item()?.tags)?.sort((a, b) => a.localeCompare(b));

  ngOnInit() {
    // this.store.dispatch(ItemsActions.loadItems());
    this.item = this.store.selectSignal(getByUrl(this.title()));
  }
}
