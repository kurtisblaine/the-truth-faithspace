import { CommonModule, isPlatformServer } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  Input,
  PLATFORM_ID,
  Signal,
  signal,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import { BASE_URL, FilterComponent, LinkComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { ItemsActions } from "../../+state/items/items.actions";
import { ItemEntity } from "../../+state/items/items.reducer";
import { selectAllItems } from "../../+state/items/items.selectors";

@Component({
  selector: "app-item-list",
  templateUrl: "./item-list.component.html",
  styleUrl: "./item-list.component.scss",
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
  ],
})
export class ItemListComponent {
  @Input() public update = false;

  public items!: Signal<ItemEntity[] | undefined>;
  public pagedItems!: Signal<ItemEntity[]>;
  public total!: Signal<number>;
  public updatedJson!: string | object;

  public initialPageSize = 5;
  public searchTerm = signal<string>("");
  public properties: string[] = ["title", "json"];
  public pageSize = signal(this.initialPageSize);
  public pageIndex = signal(0);

  public baseUrl = inject(BASE_URL);
  public platformId = inject(PLATFORM_ID);
  get isServer() {
    return isPlatformServer(this.platformId);
  }

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.items = toSignal(this.store.select(selectAllItems));

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
    item = { ...item, json: toHTML(this.updatedJson as object) };

    this.store.dispatch(
      ItemsActions.createItem({
        item,
      })
    );
  }
}
