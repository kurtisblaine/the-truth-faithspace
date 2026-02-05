import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, effect, Input, Signal, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import { map } from "rxjs";
import { FilterComponent, LinkComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { selectAllItems } from "../../+state/items/items.selectors";

@Component({
  selector: "app-item-list",
  templateUrl: "./blog-list.component.html",
  styleUrl: "./blog-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDividerModule,
    CommonModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    MatButtonModule,
    LinkComponent,
    MatPaginatorModule,
    FilterComponent,
    FontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
})
export class ItemListComponent {
  @Input() public update = false;
  @Input() public delete = false;

  public items!: Signal<ItemEntity[] | undefined>;
  public pagedItems!: Signal<ItemEntity[]>;
  public total!: Signal<number>;
  public updatedJson: string | object;

  public searchTerm = signal<string>("");
  public properties: string[] = ["title", "json"];
  public pageSize = signal(5);
  public pageIndex = signal(0);

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.items = toSignal(this.store.select(selectAllItems).pipe(map((items) => items.map((item) => ({ ...item })))));

    this.pagedItems = computed(() => {
      const filter = this.searchTerm().toLowerCase();

      const filteredItems = this.items()!.filter(
        (item) => item.json.toString().toLowerCase().includes(filter) || item.title.toLowerCase().includes(filter)
      );

      const startIndex = this.pageIndex() * this.pageSize();
      const endIndex = startIndex + this.pageSize();
      return filteredItems.slice(startIndex, endIndex);
    });

    this.total = computed(() => {
      const filter = this.searchTerm().toLowerCase();

      const filteredItems = this.items()!.filter(
        (item) => item.json.toString().toLowerCase().includes(filter) || item.title.toLowerCase().includes(filter)
      );

      return filteredItems.length;
    });

    effect(() => {
      const _ = this.searchTerm();
      this.pageIndex.set(0);
    });
  }

  ngOnInit(): void {}

  onPageChange(event?: PageEvent): void {
    this.pageIndex.set(event!.pageIndex);
    this.pageSize.set(event!.pageSize);
  }

  public doUpdate(item: ItemEntity) {
    item = { ...item, json: toHTML(this.updatedJson as object), title: item.title };

    this.store.dispatch(
      ItemsActions.createItem({
        item,
      })
    );
  }

  public doDelete(item: ItemEntity) {
    this.store.dispatch(
      ItemsActions.deleteItem({
        item,
      })
    );
  }
}
