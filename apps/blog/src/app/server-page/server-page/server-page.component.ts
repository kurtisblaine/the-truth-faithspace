import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";

@Component({
  selector: "blog-server-page",
  templateUrl: "./server-page.component.html",
  styleUrls: ["./server-page.component.scss"],
})
export class ServerPageComponent implements OnInit {
  private _document!: PsalmEntity;

  constructor(private store: Store) {}

  ngOnInit(): void {}

  public save() {
    this.store.dispatch(createPsalm({ psalm: this._document }));
  }

  public onChange(change: PsalmEntity) {
    this._document = change;
  }
}
