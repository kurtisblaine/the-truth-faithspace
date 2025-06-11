import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { Observable, map } from "rxjs";
import { TextEditorComponent } from "shared";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getAllPsalm } from "../../state/psalm/psalm.selectors";
@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
  imports: [MatDividerModule, CommonModule, TextEditorComponent, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class PsalmListComponent implements OnInit {
  @Input() public update = false;

  public psalms$!: Observable<PsalmEntity[]>;

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
    this.router.navigateByUrl("poems/poem-detail/" + blog.id, {
      state: { blog },
    });
  }
}
