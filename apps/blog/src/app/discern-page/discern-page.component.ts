import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { loadDiscernments } from "../state/discern/discern.actions";
import { getDiscernLoaded } from "../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-page",
  templateUrl: "./discern-page.component.html",
  styleUrls: ["./discern-page.component.scss"],
})
export class DiscernPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getDiscernLoaded).pipe(map((isLoaded) => !isLoaded));

    this.store.dispatch(loadDiscernments());
  }
}
