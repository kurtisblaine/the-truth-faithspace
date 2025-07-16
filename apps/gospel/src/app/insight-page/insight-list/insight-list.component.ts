import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from "@angular/router";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { toHTML } from "ngx-editor";
import { Observable, map } from "rxjs";
import { LibFaIconComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { InsightEntity } from "../../state/insight/insight.models";
import { createInsight } from "../../state/insight/insights.actions";
import { getAllInsight } from "../../state/insight/insights.selectors";

@Component({
  selector: "blog-insight-list",
  templateUrl: "./insight-list.component.html",
  styleUrls: ["./insight-list.component.scss"],
  imports: [
    MatDividerModule,
    CommonModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    MatButtonModule,
    LibFaIconComponent,
  ],
})
export class InsightListComponent implements OnInit {
  @Input() public update = false;

  public insights$!: Observable<InsightEntity[]>;
  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.insights$ = this.store.select(getAllInsight).pipe(map((insight) => cloneDeep(insight)));
  }

  public doUpdate(insight: InsightEntity) {
    insight.json = toHTML(insight.json as object);

    this.store.dispatch(
      createInsight({
        insight,
      })
    );
  }

  public navigate(blog) {
    const url = this.router.serializeUrl(this.router.createUrlTree(["insights/insight-detail/" + blog.id]));

    window.open(url, "_blank");
  }
}
