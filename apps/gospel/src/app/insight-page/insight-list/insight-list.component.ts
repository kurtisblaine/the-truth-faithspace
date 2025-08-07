import { CommonModule } from "@angular/common";
import { Component, effect, Input, OnInit, signal, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import { LibFaIconComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { LinkComponent } from "../../shared/components/link-redirect/link.component";
import { InsightEntity } from "../../state/insight/insight.models";
import { createInsight } from "../../state/insight/insights.actions";
import { getAllInsight } from "../../state/insight/insights.selectors";

@Component({
  selector: "blog-insight-list",
  templateUrl: "./insight-list.component.html",
  styleUrls: ["./insight-list.component.scss"],
  imports: [
    MatDividerModule,
    CommonModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    MatButtonModule,
    LibFaIconComponent,
    LinkComponent,
    MatPaginatorModule,
  ],
})
export class InsightListComponent implements OnInit {
  @Input() public update = false;

  public insights!: Signal<InsightEntity[]>;
  public pagedInsights = signal<InsightEntity[]>([]);
  public total!: number;

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.insights = toSignal(this.store.select(getAllInsight));

    effect(() => {
      this.total = this.insights().length;
      this.onPageChange({ pageIndex: 0, pageSize: 5 } as PageEvent);
    });
  }

  ngOnInit(): void {}

  onPageChange(event?: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedInsights.set(this.insights().slice(startIndex, endIndex));
  }

  public doUpdate(insight: InsightEntity) {
    insight.json = toHTML(insight.json as object);

    this.store.dispatch(
      createInsight({
        insight,
      })
    );
  }
}
