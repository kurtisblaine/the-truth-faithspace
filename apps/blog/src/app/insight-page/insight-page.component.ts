import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadInsights } from "../state/insight/insights.actions";

@Component({
  selector: "blog-insight-page",
  templateUrl: "./insight-page.component.html",
  styleUrls: ["./insight-page.component.scss"],
})
export class InsightPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadInsights());
  }
}
