import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash";
import { toHTML } from "ngx-editor";
import { map, Observable } from "rxjs";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { selectAllItems } from "../../+state/items/items.selectors";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrl: "./item-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ItemListComponent {
  @Input() public update = false;

  public items$!: Observable<ItemEntity[]>;
  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectAllItems).pipe(map((item) => cloneDeep(item)));
  }

  public doUpdate(item: ItemEntity) {
    item.json = toHTML(item.json as object);
    this.store.dispatch(
      ItemsActions.createItem({
        item,
      })
    );
  }
}
