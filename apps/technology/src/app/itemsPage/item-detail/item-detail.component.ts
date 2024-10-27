import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { getById } from "../../+state/items/items.selectors";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrl: "./item-detail.component.scss",
})
export class ItemDetailComponent {
  public item: ItemEntity;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());

    this.route.params
      .pipe(
        switchMap((p) => {
          return this.store.select(getById(p["id"]));
        })
      )
      .subscribe((r) => {
        this.item = r as ItemEntity;
      });
  }
}
