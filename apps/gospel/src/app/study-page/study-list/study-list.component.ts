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
import { StudyActions } from "../../state/study/study.actions";
import { StudyEntity } from "../../state/study/study.model";
import { getAllStudy } from "../../state/study/study.selectors";

@Component({
  selector: "blog-study-list",
  templateUrl: "./study-list.component.html",
  styleUrl: "./study-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    MatDividerModule,
    CommonModule,
    MatButtonModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    LibFaIconComponent,
    LinkComponent,
    MatPaginatorModule,
  ],
})
export class StudyListComponent implements OnInit {
  @Input() public update = false;

  public studies!: Signal<StudyEntity[]>;
  public pagedStudies = signal<StudyEntity[]>([]);
  public total!: number;
  public updatedJson: string | object;

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.studies = toSignal(this.store.select(getAllStudy));

    effect(() => {
      this.total = this.studies().length;
      this.onPageChange({ pageIndex: 0, pageSize: 7 } as PageEvent);
    });
  }

  ngOnInit(): void {}

  onPageChange(event?: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedStudies.set(this.studies().slice(startIndex, endIndex));
  }

  public doUpdate(study: StudyEntity) {
    study = { ...study, json: toHTML(this.updatedJson as object) };

    this.store.dispatch(
      StudyActions.createStudy({
        study,
      })
    );
  }
}
