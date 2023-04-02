import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { updatePsalms } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { getAllPsalm } from "../../state/psalm/psalm.selectors";

@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmListComponent implements OnInit {
  private _document!: object;

  @Input() public update = false;

  public psalms$!: Observable<PsalmEntity[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.psalms$ = this.store.select(getAllPsalm);
  }

  public updated(psalm: PsalmEntity) {
    this.store.dispatch(
      updatePsalms({
        psalm: {
          ...psalm,
          json: this._document,
        },
      })
    );
  }

  public onChange(change: PsalmEntity) {
    this._document = change;
  }
}
