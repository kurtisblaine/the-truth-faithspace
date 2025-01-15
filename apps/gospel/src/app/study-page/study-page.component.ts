import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { StudyActions } from "../state/study/study.actions";
import { getStudyLoaded } from "../state/study/study.selectors";

@Component({
  selector: "blog-study-page",
  templateUrl: "./study-page.component.html",
  styleUrl: "./study-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class StudyPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(StudyActions.loadStudies());
    this.isLoading$ = this.store.select(getStudyLoaded).pipe(map((isLoaded) => !isLoaded));
  }
}
