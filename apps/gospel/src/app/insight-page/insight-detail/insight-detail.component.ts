import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { SeoBaseComponent } from "../../shared/components/seo-base/seo-base.component";
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
  public blog: InsightEntity;

  protected override keywords: string = "insight, wisdom, truth, eyes, sight, spiritual, understanding, proverbs";

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(loadInsights());

    this.route.params
      .pipe(
        switchMap((p) => {
          return this.store.select(getById(p["id"]));
        })
      )
      .subscribe((r) => {
        this.blog = r;
      });
  }
}
