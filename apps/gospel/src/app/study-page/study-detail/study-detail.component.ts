import { DatePipe } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, OnInit, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
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
  public blog: Signal<StudyEntity>;

  constructor(private store: Store, private route: ActivatedRoute, private datePipe: DatePipe) {
    super();

    effect(() => {
      if (!this.blog()?.id) return;

      this.setTitle(this.blog().title, false, " | Study");
      const date = this.datePipe.transform(this.blog().date);
      this.setDescription(`${date}: ${this.blog().title}. A Christian's study on the following topic.`);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(StudyActions.loadStudies());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog = this.store.selectSignal(getById(id));
  }
}
