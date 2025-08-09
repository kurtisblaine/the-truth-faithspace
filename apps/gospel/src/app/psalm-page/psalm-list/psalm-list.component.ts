import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, Input, OnInit, signal, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import { LibFaIconComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { LinkComponent } from "../../shared/components/link-redirect/link.component";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getAllPsalm } from "../../state/psalm/psalm.selectors";
@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmListComponent implements OnInit {
  @Input() public update = false;

  public psalms!: Signal<PsalmEntity[]>;
  public pagedPsalms = signal<PsalmEntity[]>([]);
  public total!: number;
  public updatedJson: string | object;

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.psalms = toSignal(this.store.select(getAllPsalm));

    effect(() => {
      this.total = this.psalms().length;
      this.onPageChange({ pageIndex: 0, pageSize: 5 } as PageEvent);
    });
  }

  ngOnInit(): void {}

  onPageChange(event?: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedPsalms.set(this.psalms().slice(startIndex, endIndex));
  }

  public doUpdate(psalm: PsalmEntity) {
    psalm = { ...psalm, json: toHTML(this.updatedJson as object) };

    this.store.dispatch(
      createPsalm({
        psalm,
      })
    );
  }
}
