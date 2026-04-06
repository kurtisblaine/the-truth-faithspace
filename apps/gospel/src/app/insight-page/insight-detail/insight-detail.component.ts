import { DatePipe } from "@angular/common";
import { Component, effect, OnInit, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SeoBaseComponent } from "shared";
import { InsightEntity } from "../../state/insight/insight.models";
import { loadInsights } from "../../state/insight/insights.actions";
import { getById } from "../../state/insight/insights.selectors";

@Component({
  selector: "blog-insight-detail",
  templateUrl: "./insight-detail.component.html",
  styleUrls: ["./insight-detail.component.scss"],
  standalone: false,
})
export class InsightDetailComponent extends SeoBaseComponent implements OnInit {
  public blog: Signal<InsightEntity>;

  protected override keywords: string = "insight, wisdom, truth, eyes, sight, spiritual, understanding, proverbs";

  constructor(private store: Store, private route: ActivatedRoute, private datePipe: DatePipe) {
    super();

    effect(() => {
      if (!this.blog()?.id) return;

      this.setTitle(this.blog().title);
      const date = this.datePipe.transform(this.blog().date);
      this.setDescription(`${date}: ${this.blog().title}. A Christian's insight on the following topic.`);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadInsights());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog = this.store.selectSignal(getById(id));
  }
}
