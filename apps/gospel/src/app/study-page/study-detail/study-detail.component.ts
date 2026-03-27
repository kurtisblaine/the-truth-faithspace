import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { SeoBaseComponent } from "shared";
import { StudyActions } from "../../state/study/study.actions";
import { StudyEntity } from "../../state/study/study.model";
import { getById } from "../../state/study/study.selectors";
@Component({
  selector: "blog-study-detail",
  templateUrl: "./study-detail.component.html",
  styleUrl: "./study-detail.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class StudyDetailComponent extends SeoBaseComponent implements OnInit {
  public blog$: Observable<StudyEntity>;

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(StudyActions.loadStudies());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog$ = this.store.select(getById(id)).pipe(tap(() => this.init()));
  }
}
