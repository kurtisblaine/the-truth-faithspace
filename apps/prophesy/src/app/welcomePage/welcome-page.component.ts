import { ChangeDetectionStrategy, Component, Signal } from "@angular/core";
import { MatRippleModule } from "@angular/material/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { NumberTickerComponent, SeoBaseComponent, tileSlideIn } from "shared";
import { Tag, TagKey } from "../+state/items.database";
import { ItemsActions } from "../+state/items/items.actions";
import { ProphesyCounts, selectAllCounts } from "../+state/items/items.selectors";

@Component({
  selector: "app-welcome-page",
  imports: [NumberTickerComponent, MatRippleModule],
  templateUrl: "./welcome-page.component.html",
  styleUrl: "./welcome-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [tileSlideIn],
})
export class WelcomePageComponent extends SeoBaseComponent {
  public counts: Signal<ProphesyCounts>;

  constructor(private store: Store, private router: Router) {
    super();

    this.store.dispatch(ItemsActions.loadItems());
    this.counts = this.store.selectSignal(selectAllCounts);
  }

  goToProphesies(types: TagKey[]) {
    const typesBasedOnKeys = Object.entries(Tag)
      .filter(([key, _]) => types.some((type) => key === type))
      .map(([key]) => key);

    this.router.navigate([`prophesies`], {
      queryParams: {
        tags: typesBasedOnKeys.reduce((query, tag, index) => (query += index === 0 ? tag : `,${tag}`), ""),
        filter: "include",
      },
      queryParamsHandling: "merge",
    });
  }
}
