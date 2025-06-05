import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { map, Observable } from "rxjs";
import { StudyActions } from "../../state/study/study.actions";
import { StudyEntity } from "../../state/study/study.model";
import { getAllStudy } from "../../state/study/study.selectors";

@Component({
  selector: "blog-study-list",
  templateUrl: "./study-list.component.html",
  styleUrl: "./study-list.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class StudyListComponent implements OnInit {
  @Input() public update = false;

  public studies$!: Observable<StudyEntity[]>;

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
    this.router.navigateByUrl("study-detail/" + blog.id, {
      state: { blog },
    });
  }
}
