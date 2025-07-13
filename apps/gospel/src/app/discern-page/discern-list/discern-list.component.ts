import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { Observable, map } from "rxjs";
import { TextEditorComponent } from "shared";
import { createDiscern } from "../../state/discern/discern.actions";
import { DiscernEntity } from "../../state/discern/discern.models";
import { getAllDiscern } from "../../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-list",
  templateUrl: "./discern-list.component.html",
  styleUrls: ["./discern-list.component.scss"],
  imports: [MatDividerModule, CommonModule, TextEditorComponent, MatButtonModule],
})
export class DiscernListComponent implements OnInit {
  @Input() public update = false;

  public discernments$!: Observable<DiscernEntity[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.discernments$ = this.store.select(getAllDiscern).pipe(map((discern) => cloneDeep(discern)));
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
    this.router.navigateByUrl("discernments/discernment-detail/" + blog.id, {
      state: { blog },
    });
  }
}
