import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { Observable, map } from "rxjs";
import { createDiscern } from "../../state/discern/discern.actions";
import { DiscernEntity } from "../../state/discern/discern.models";
import { getAllDiscern } from "../../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-list",
  templateUrl: "./discern-list.component.html",
  styleUrls: ["./discern-list.component.scss"],
})
export class DiscernListComponent implements OnInit {
  @Input() public update = false;

  public discernments$!: Observable<DiscernEntity[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.discernments$ = this.store
      .select(getAllDiscern)
      .pipe(map((discern) => cloneDeep(discern)));
  }

  public doUpdate(discern: DiscernEntity) {
    this.store.dispatch(
      createDiscern({
        discern,
      })
    );

    // this.router.navigateByUrl("discernments");
  }

  public navigate(blog) {
    this.router.navigateByUrl("discernment-detail/" + blog.id, {
      state: { blog },
    });
  }
}
