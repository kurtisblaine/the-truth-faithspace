import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadDiscernments } from "../state/discern/discern.actions";

@Component({
  selector: "blog-discern-page",
  templateUrl: "./discern-page.component.html",
  styleUrls: ["./discern-page.component.scss"],
})
export class DiscernPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadDiscernments());
  }
}
