import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from "@angular/router";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { Observable, map } from "rxjs";
import { LibFaIconComponent, TextEditorComponent } from "shared";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getAllPsalm } from "../../state/psalm/psalm.selectors";
@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
  imports: [MatDividerModule, CommonModule, TextEditorComponent, MatButtonModule, LibFaIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmListComponent implements OnInit {
  @Input() public update = false;

  public psalms$!: Observable<PsalmEntity[]>;
  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.psalms$ = this.store.select(getAllPsalm).pipe(map((psalms) => cloneDeep(psalms)));
  }

  public doUpdate(psalm: PsalmEntity) {
    this.store.dispatch(
      createPsalm({
        psalm,
      })
    );

    // this.router.navigateByUrl("poems");
  }

  public navigate(blog) {
    const url = this.router.serializeUrl(this.router.createUrlTree(["poems/poem-detail/" + blog.id]));

    window.open(url, "_blank");
  }
}
