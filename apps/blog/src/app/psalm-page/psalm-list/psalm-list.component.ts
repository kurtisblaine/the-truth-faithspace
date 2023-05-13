import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as lodash from "lodash";
import { Observable, map } from "rxjs";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getAllPsalm } from "../../state/psalm/psalm.selectors";
@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmListComponent implements OnInit {
  @Input() public update = false;

  public psalms$!: Observable<PsalmEntity[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.psalms$ = this.store
      .select(getAllPsalm)
      .pipe(map((psalms) => lodash.cloneDeep(psalms)));
  }

  public doUpdate(psalm: PsalmEntity) {
    this.store.dispatch(
      createPsalm({
        psalm,
      })
    );

    // this.router.navigateByUrl("psalms");
  }
}
