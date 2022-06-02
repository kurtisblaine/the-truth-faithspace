import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import {
  getAllPsalm,
  getPsalmEntities,
} from "../../state/psalm/psalm.selectors";

@Component({
  selector: "blog-psalm-list",
  templateUrl: "./psalm-list.component.html",
  styleUrls: ["./psalm-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PsalmListComponent implements OnInit {
  public psalms$!: Observable<PsalmEntity[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.psalms$ = this.store.select(getAllPsalm);
  }
}
