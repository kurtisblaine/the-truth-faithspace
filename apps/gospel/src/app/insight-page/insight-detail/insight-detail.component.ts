import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
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
  public blog$: Observable<InsightEntity>;

  protected override keywords: string = "insight, wisdom, truth, eyes, sight, spiritual, understanding, proverbs";

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(loadInsights());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog$ = this.store.select(getById(id)).pipe(
      tap((item) => {
        this.setTitle(item.title);
        this.setDescription(
          `${item.date}: Christian scripture and writing for insight on the following topic, '${item.title}'.`
        );
      })
    );
  }
}
