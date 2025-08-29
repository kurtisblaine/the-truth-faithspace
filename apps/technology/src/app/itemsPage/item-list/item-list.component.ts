import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, Input, Signal, signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { selectAllItems } from "../../+state/items/items.selectors";
import { ReadonlyTextEditorComponent, TextEditorComponent } from "../../../../../../libs/src";
import { LinkComponent } from "../../shared/link/link.component";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrl: "./item-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDividerModule,
    CommonModule,
    MatButtonModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    LinkComponent,
    MatPaginatorModule,
  ],
})
export class ItemListComponent {
  @Input() public update = false;

  public items!: Signal<ItemEntity[] | undefined>;
  public pagedItems = signal<ItemEntity[]>([]);
  public total!: number;
  public updatedJson: string | object;

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.items = toSignal(this.store.select(selectAllItems));

    effect(() => {
      this.total = this.items()!.length;
      this.onPageChange({ pageIndex: 0, pageSize: 7 } as PageEvent);
    });
  }

  ngOnInit(): void {}

  onPageChange(event?: PageEvent): void {
    if (!event) return;

    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedItems.set(this.items()!.slice(startIndex, endIndex));
  }

  public doUpdate(item: ItemEntity) {
    item = { ...item, json: toHTML(this.updatedJson as object) };

    this.store.dispatch(
      ItemsActions.createItem({
        item,
      })
    );
  }
}
