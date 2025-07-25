import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { getById } from "../../+state/items/items.selectors";

@Component({
  selector: "app-item-detail",
  templateUrl: "./item-detail.component.html",
  styleUrl: "./item-detail.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ItemDetailComponent {
  public item$!: Observable<ItemEntity | undefined>;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());

    const id = this.route.snapshot.paramMap.get("id");
    if (id) this.item$ = this.store.select(getById(id));
  }
}
