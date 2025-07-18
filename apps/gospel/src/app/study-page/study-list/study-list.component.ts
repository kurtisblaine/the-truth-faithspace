import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from "@angular/router";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { toHTML } from "ngx-editor";
import { map, Observable } from "rxjs";
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
  ],
})
export class StudyListComponent implements OnInit {
  @Input() public update = false;

  public studies$!: Observable<StudyEntity[]>;
  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.studies$ = this.store.select(getAllStudy).pipe(map((studies) => cloneDeep(studies)));
  }

  public doUpdate(study: StudyEntity) {
    study.json = toHTML(study.json as object);

    this.store.dispatch(
      StudyActions.createStudy({
        study,
      })
    );
  }
}
