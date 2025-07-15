import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from "@angular/router";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { map, Observable } from "rxjs";
import { LibFaIconComponent, TextEditorComponent } from "shared";
import { StudyActions } from "../../state/study/study.actions";
import { StudyEntity } from "../../state/study/study.model";
import { getAllStudy } from "../../state/study/study.selectors";

@Component({
  selector: "blog-study-list",
  templateUrl: "./study-list.component.html",
  styleUrl: "./study-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatDividerModule, CommonModule, MatButtonModule, TextEditorComponent, LibFaIconComponent],
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
    this.store.dispatch(
      StudyActions.createStudy({
        study,
      })
    );

    // this.router.navigateByUrl("studies");
  }

  public navigate(blog) {
    const url = this.router.serializeUrl(this.router.createUrlTree(["studies/study-detail/" + blog.id]));

    window.open(url, "_blank");
  }
}
