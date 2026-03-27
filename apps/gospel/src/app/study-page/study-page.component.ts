import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { SeoBaseComponent } from "shared";
import { StudyActions } from "../state/study/study.actions";
import { getStudyLoaded } from "../state/study/study.selectors";

@Component({
  selector: "blog-study-page",
  templateUrl: "./study-page.component.html",
  styleUrl: "./study-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class StudyPageComponent extends SeoBaseComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  protected override keywords: string = "scriptures, truth, rightly divide, worker, unashamed";

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(StudyActions.loadStudies());
    this.isLoading$ = this.store.select(getStudyLoaded).pipe(map((isLoaded) => !isLoaded));
  }
}
