import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash";
import { map, Observable } from "rxjs";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { selectAllItems } from "../../+state/items/items.selectors";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrl: "./item-list.component.scss",
    changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ItemListComponent {
  @Input() public update = false;

  public items$!: Observable<ItemEntity[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectAllItems).pipe(map((item) => cloneDeep(item)));
  }

  public doUpdate(item: ItemEntity) {
    this.store.dispatch(
      ItemsActions.createItem({
        item,
      })
    );

    // this.router.navigateByUrl("items");
  }

  public navigate(item) {
    this.router.navigateByUrl("item-detail/" + item.id, {
      state: { item },
    });
  }
}
