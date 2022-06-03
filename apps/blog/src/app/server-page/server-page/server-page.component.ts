import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
import { Guid } from "guid-typescript";
import { Router } from "@angular/router";
@Component({
  selector: "blog-server-page",
  templateUrl: "./server-page.component.html",
  styleUrls: ["./server-page.component.scss"],
})
export class ServerPageComponent implements OnInit {
  public title!: string;
  private _document!: PsalmEntity;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  public save() {
    this.store.dispatch(
      createPsalm({
        psalm: {
          title: this.title,
          json: this._document,
          date: Date.now().toString(),
          id: Guid.create().toString(),
        },
      })
    );

    this.router.navigateByUrl("psalms");
  }

  public onChange(change: PsalmEntity) {
    this._document = change;
  }
}
