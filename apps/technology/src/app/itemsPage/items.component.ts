import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { ItemsActions } from "../+state/items/items.actions";
import { ItemEntity } from "../+state/items/items.reducer";
import { selectAllItems, selectItemsLoaded } from "../+state/items/items.selectors";
@Component({
  selector: "app-items",
  templateUrl: "./items.component.html",
  styleUrl: "./items.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsComponent {
  public items$!: Observable<ItemEntity[]>;
  public isLoading$!: Observable<boolean>;
  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    this.store.dispatch(ItemsActions.loadItems());

    this.items$ = this.store.select(selectAllItems);
    this.isLoading$ = this.store.select(selectItemsLoaded).pipe(map((r) => !r));
  }
}
