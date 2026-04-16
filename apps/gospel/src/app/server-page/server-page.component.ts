import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import { v4 } from "uuid";
import { createBlog, loadBlogs } from "../state/blog/blog.actions";
import { createDiscern, loadDiscernments } from "../state/discern/discern.actions";
import { createInsight, loadInsights } from "../state/insight/insights.actions";
import { createPsalm, loadPsalms } from "../state/psalm/psalm.actions";
import { PsalmEntity } from "../state/psalm/psalm.models";
import { toKebabCase } from "../state/state.config";
import { StudyActions } from "../state/study/study.actions";
@Component({
  selector: "blog-server-page",
  templateUrl: "./server-page.component.html",
  styleUrls: ["./server-page.component.scss"],
  standalone: false,
})
export class ServerPageComponent implements OnInit {
  public title!: string;
  private _document!: PsalmEntity;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {}

  public loadPsalms() {
    this.store.dispatch(loadPsalms());
  }

  public loadInsights() {
    this.store.dispatch(loadInsights());
  }

  public loadDiscernments() {
    this.store.dispatch(loadDiscernments());
  }

  public loadStudies() {
    this.store.dispatch(StudyActions.loadStudies());
  }

  public loadBlogs() {
    this.store.dispatch(loadBlogs());
  }

  public saveStudy() {
    this.store.dispatch(
      StudyActions.createStudy({
        study: {
          title: this.title,
          json: toHTML(this._document),
          date: Date.now().toString(),
          id: v4().toString(),
        },
      })
    );

    this.router.navigateByUrl("studies");
  }

  public saveDiscernment() {
    this.store.dispatch(
      createDiscern({
        discern: {
          title: this.title,
          url: toKebabCase(this.title),
          json: toHTML(this._document),
          date: Date.now().toString(),
          id: v4().toString(),
        },
      })
    );

    this.router.navigateByUrl("discernments");
  }

  public savePsalm() {
    this.store.dispatch(
      createPsalm({
        psalm: {
          title: this.title,
          url: toKebabCase(this.title),
          json: toHTML(this._document),
          date: Date.now().toString(),
          id: v4().toString(),
        },
      })
    );

    this.router.navigateByUrl("poems");
  }

  public saveBlog() {
    this.store.dispatch(
      createBlog({
        blog: {
          title: this.title,
          url: toKebabCase(this.title),
          json: toHTML(this._document),
          date: Date.now().toString(),
          id: v4().toString(),
        },
      })
    );

    this.router.navigateByUrl("edifications");
  }

  public saveInsight() {
    this.store.dispatch(
      createInsight({
        insight: {
          title: this.title,
          url: toKebabCase(this.title),
          json: toHTML(this._document),
          date: Date.now().toString(),
          id: v4().toString(),
        },
      })
    );

    this.router.navigateByUrl("insights");
  }

  public onChange(change: PsalmEntity) {
    this._document = change;
  }
}
