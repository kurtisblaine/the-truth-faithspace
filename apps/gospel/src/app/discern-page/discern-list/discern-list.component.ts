import { CommonModule } from "@angular/common";
import { Component, computed, effect, inject, Input, OnInit, signal, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import {
  BASE_URL,
  FilterComponent,
  LibFaIconComponent,
  LinkComponent,
  ReadonlyTextEditorComponent,
  TextEditorComponent,
} from "shared";
import { createDiscern } from "../../state/discern/discern.actions";
import { DiscernEntity } from "../../state/discern/discern.models";
import { getAllDiscern } from "../../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-list",
  templateUrl: "./discern-list.component.html",
  styleUrls: ["./discern-list.component.scss"],
  imports: [
    MatDividerModule,
    CommonModule,
    ReadonlyTextEditorComponent,
    TextEditorComponent,
    MatButtonModule,
    LibFaIconComponent,
    MatPaginatorModule,
    FilterComponent,
    LinkComponent,
  ],
})
export class DiscernListComponent implements OnInit {
  @Input() public update = false;

  public discernments!: Signal<DiscernEntity[]>;
  public pagedDiscernments!: Signal<DiscernEntity[]>;
  public total!: Signal<number>;
  public updatedJson: string | object;

  public baseUrl = inject(BASE_URL);

  public initialPageSize = 5;
  public searchTerm = signal<string>("");
  public properties: string[] = ["title", "json"];
  public pageSize = signal(this.initialPageSize);
  public pageIndex = signal(0);

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.discernments = toSignal(this.store.select(getAllDiscern));

    this.pagedDiscernments = computed(() => {
      const filter = this.searchTerm().toLowerCase();

      const filteredItems = this.discernments().filter(
        (item) => item.json.toString().toLowerCase().includes(filter) || item.title.toLowerCase().includes(filter)
      );

      const startIndex = this.pageIndex() * this.pageSize();
      const endIndex = startIndex + this.pageSize();
      return filteredItems.slice(startIndex, endIndex);
    });

    this.total = computed(() => {
      const filter = this.searchTerm().toLowerCase();

      const filteredItems = this.discernments().filter(
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
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
  }

  public doUpdate(discern: DiscernEntity) {
    discern = { ...discern, json: toHTML(this.updatedJson as object) };

    this.store.dispatch(
      createDiscern({
        discern,
      })
    );
  }
}
