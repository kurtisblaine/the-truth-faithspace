import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { getById } from "../../+state/items/items.selectors";
import { SeoBaseComponent } from "../../../../../../libs/src";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrl: "./item-detail.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ItemDetailComponent extends SeoBaseComponent implements OnInit {
  public item$!: Observable<ItemEntity | undefined>;

  protected override keywords: string =
    "blog, technology, tech, ai, truth, falsehood, dark web, truth, revealed, uncovered, web, internet";

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());

    const id = this.route.snapshot.paramMap.get("id");
    this.item$ = this.store.select(getById(id!)).pipe(tap(() => this.init()));
  }
}
