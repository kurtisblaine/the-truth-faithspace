import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { ItemEntity } from "../+state/items/items.reducer";
import { selectAllItems, selectItemsLoaded } from "../+state/items/items.selectors";
import { ItemListComponent } from "./item-list/item-list.component";
@Component({
  selector: "app-items",
  standalone: true,
  imports: [CommonModule, RouterModule, ItemListComponent, MatProgressSpinnerModule],
  templateUrl: "./items.component.html",
  styleUrl: "./items.component.scss",
})
export class ItemsComponent {
  public items$!: Observable<ItemEntity[]>;
  public isLoading$!: Observable<boolean>;
  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    // this.store.dispatch(ItemsActions.loadItems());

    this.items$ = this.store.select(selectAllItems);
    this.isLoading$ = this.store.select(selectItemsLoaded).pipe(map((r) => !r));
  }
}
