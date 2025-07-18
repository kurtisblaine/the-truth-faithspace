import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { toHTML } from "ngx-editor";
import { Observable, map } from "rxjs";
import { LibFaIconComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { LinkComponent } from "../../shared/components/link-redirect/link.component";
import { createDiscern } from "../../state/discern/discern.actions";
import { DiscernEntity } from "../../state/discern/discern.models";
import { getAllDiscern } from "../../state/discern/discern.selectors";

@Component({
  selector: "blog-discern-list",
  templateUrl: "./discern-list.component.html",
  styleUrls: ["./discern-list.component.scss"],
  imports: [
    MatDividerModule,
    CommonModule,
    ReadonlyTextEditorComponent,
    TextEditorComponent,
    MatButtonModule,
    LibFaIconComponent,
    LinkComponent,
  ],
})
export class DiscernListComponent implements OnInit {
  @Input() public update = false;

  public discernments$!: Observable<DiscernEntity[]>;
  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.discernments$ = this.store.select(getAllDiscern).pipe(map((discern) => cloneDeep(discern)));
  }

  public doUpdate(discern: DiscernEntity) {
    discern.json = toHTML(discern.json as object);
    this.store.dispatch(
      createDiscern({
        discern,
      })
    );
  }
}
