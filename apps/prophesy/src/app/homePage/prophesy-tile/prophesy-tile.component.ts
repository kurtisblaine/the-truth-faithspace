import { ChangeDetectionStrategy, Component, inject, input, ViewEncapsulation } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatChipsModule } from "@angular/material/chips";
import { MatRippleModule } from "@angular/material/core";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BASE_URL, LinkComponent, TooltipDirective } from "shared";
import { getTagColorClass, Tag } from "../../+state/items/items.models";
import { ItemEntity } from "../../+state/items/items.reducer";

@Component({
  selector: "app-prophesy-tile",
  imports: [MatCardModule, TooltipDirective, LinkComponent, MatChipsModule, MatRippleModule, MatTooltipModule],
  templateUrl: "./prophesy-tile.component.html",
  styleUrl: "./prophesy-tile.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProphesyTileComponent {
  public item = input<ItemEntity>();
  public baseUrl = inject(BASE_URL);

  showTagsSorted = () => Object.values(this.item()?.tags)?.sort((a, b) => a.localeCompare(b));

  getTagColorClass = (tag: Tag) => getTagColorClass(tag);
}
