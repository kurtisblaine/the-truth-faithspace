import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { Observable, map } from "rxjs";
import { InsightEntity } from "../../state/insight/insight.models";
import { createInsight } from "../../state/insight/insights.actions";
import { getAllInsight } from "../../state/insight/insights.selectors";

@Component({
  selector: "blog-insight-list",
  templateUrl: "./insight-list.component.html",
  styleUrls: ["./insight-list.component.scss"],
  standalone: false,
})
export class InsightListComponent implements OnInit {
  @Input() public update = false;

  public insights$!: Observable<InsightEntity[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.insights$ = this.store.select(getAllInsight).pipe(map((insight) => cloneDeep(insight)));
  }

  public doUpdate(insight: InsightEntity) {
    this.store.dispatch(
      createInsight({
        insight,
      })
    );

    // this.router.navigateByUrl("insights");
  }

  public navigate(blog) {
    this.router.navigateByUrl("insights/insight-detail/" + blog.id, {
      state: { blog },
    });
  }
}
