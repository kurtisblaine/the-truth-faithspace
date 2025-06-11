import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";
import { loadDiscernments } from "../state/discern/discern.actions";
import { getDiscernLoaded } from "../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-page",
  templateUrl: "./discern-page.component.html",
  styleUrls: ["./discern-page.component.scss"],
  standalone: false,
})
export class DiscernPageComponent extends SeoBaseComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  protected override keywords: string = "spiritual, discernment, discern, wisdom, judgement, truth, Jesus";

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getDiscernLoaded).pipe(map((isLoaded) => !isLoaded));

    this.store.dispatch(loadDiscernments());
  }
}
