import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { loadDiscernments } from "../../state/discern/discern.actions";
import { DiscernEntity } from "../../state/discern/discern.models";
import { getById } from "../../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-detail",
  templateUrl: "./discern-detail.component.html",
  styleUrls: ["./discern-detail.component.scss"],
  standalone: false,
})
export class DiscernDetailComponent implements OnInit {
  public blog: DiscernEntity;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadDiscernments());

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
