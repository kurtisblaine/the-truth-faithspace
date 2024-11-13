import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { StudyActions } from "../../state/study/study.actions";
import { StudyEntity } from "../../state/study/study.model";
import { getById } from "../../state/study/study.selectors";
@Component({
  selector: "blog-study-detail",
  templateUrl: "./study-detail.component.html",
  styleUrl: "./study-detail.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudyDetailComponent implements OnInit {
  public study: StudyEntity;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(StudyActions.loadStudies());

    this.route.params
      .pipe(
        switchMap((p) => {
          return this.store.select(getById(p["id"]));
        })
      )
      .subscribe((r) => {
        this.study = r;
      });
  }
}
