import { Component, input, OnInit, Signal, ViewEncapsulation } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { Store } from "@ngrx/store";
import { SeoBaseComponent } from "shared";
import { getTagColorClass, Tag } from "../+state/items/items.models";
import { ItemEntity } from "../+state/items/items.reducer";
import { getByUrl } from "../+state/items/items.selectors";
import { FormatScriptureDirective } from "./format-scripture.directive";

@Component({
  selector: "app-prophesy-item-page",
  imports: [MatCardModule, MatChipsModule, FormatScriptureDirective],
  templateUrl: "./prophesy-item-page.component.html",
  styleUrl: "./prophesy-item-page.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class ProphesyItemPageComponent extends SeoBaseComponent implements OnInit {
  public title = input.required<string>(); //from input

  public item!: Signal<ItemEntity>;

  constructor(private store: Store) {
    super();
  }

  showTagsSorted = () =>
    this.item()?.tags?.length ? Object.values(this.item()?.tags)?.sort((a, b) => a.localeCompare(b)) : [];

  getTagColorClass = (tag: Tag) => getTagColorClass(tag);

  ngOnInit() {
    this.item = this.store.selectSignal(getByUrl(this.title()));
  }
}
