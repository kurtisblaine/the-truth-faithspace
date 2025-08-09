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
    LinkComponent,
    MatPaginatorModule,
  ],
})
export class DiscernListComponent implements OnInit {
  @Input() public update = false;

  public discernments!: Signal<DiscernEntity[]>;
  public pagedDiscernments = signal<DiscernEntity[]>([]);
  public total!: number;
  public updatedJson: string | object;

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.discernments = toSignal(this.store.select(getAllDiscern));

    effect(() => {
      this.total = this.discernments().length;
      this.onPageChange({ pageIndex: 0, pageSize: 5 } as PageEvent);
    });
  }

  ngOnInit(): void {}

  onPageChange(event?: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedDiscernments.set(this.discernments().slice(startIndex, endIndex));
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
