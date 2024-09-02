import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { InsightEntity } from "../../state/insight/insight.models";
import { loadInsights } from "../../state/insight/insights.actions";
import { getById } from "../../state/insight/insights.selectors";

@Component({
  selector: "blog-insight-detail",
  templateUrl: "./insight-detail.component.html",
  styleUrls: ["./insight-detail.component.css"],
})
export class InsightDetailComponent implements OnInit {
  public blog: InsightEntity;

  constructor(private store: Store, private route: ActivatedRoute) {}

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
