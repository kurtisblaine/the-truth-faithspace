import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { loadInsights } from "../state/insight/insights.actions";
import { getInsightLoaded } from "../state/insight/insights.selectors";

@Component({
  selector: "blog-insight-page",
  templateUrl: "./insight-page.component.html",
  styleUrls: ["./insight-page.component.scss"],
  standalone: false,
})
export class InsightPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getInsightLoaded).pipe(map((isLoaded) => !isLoaded));

    this.store.dispatch(loadInsights());
  }
}
