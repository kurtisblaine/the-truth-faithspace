import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { toHTML } from "ngx-editor";
import { Observable, map } from "rxjs";
import { LibFaIconComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { LinkComponent } from "../../shared/components/link-redirect/link.component";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getAllPsalm } from "../../state/psalm/psalm.selectors";
@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
  imports: [
    MatDividerModule,
    CommonModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    MatButtonModule,
    LibFaIconComponent,
    LinkComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmListComponent implements OnInit {
  @Input() public update = false;

  public psalms$!: Observable<PsalmEntity[]>;
  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.psalms$ = this.store.select(getAllPsalm).pipe(map((psalms) => cloneDeep(psalms)));
  }

  public doUpdate(psalm: PsalmEntity) {
    psalm.json = toHTML(psalm.json as object);
    this.store.dispatch(
      createPsalm({
        psalm,
      })
    );
  }
}
