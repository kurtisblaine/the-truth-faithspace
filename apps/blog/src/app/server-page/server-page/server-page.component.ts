import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Guid } from "guid-typescript";
import { createBlog } from "../../state/blog/blog.actions";
import { createProverb } from "../../state/proverb/proverbs.actions";
import { createPsalm } from "../../state/psalm/psalm.actions";
import { PsalmEntity } from "../../state/psalm/psalm.models";
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

  public savePsalm() {
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

  public saveBlog() {
    this.store.dispatch(
      createBlog({
        blog: {
          title: this.title,
          json: this._document,
          date: Date.now().toString(),
          id: Guid.create().toString(),
        },
      })
    );

    this.router.navigateByUrl("blogs");
  }

  public saveProverb() {
    this.store.dispatch(
      createProverb({
        proverb: {
          title: this.title,
          json: this._document,
          date: Date.now().toString(),
          id: Guid.create().toString(),
        },
      })
    );

    this.router.navigateByUrl("proverbs");
  }

  public onChange(change: PsalmEntity) {
    this._document = change;
  }
}
