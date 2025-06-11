import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";
import { loadBlogs } from "../state/blog/blog.actions";
import { getBlogLoaded } from "../state/blog/blog.selectors";

@Component({
  selector: "blog-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.scss"],
  standalone: false,
})
export class BlogPageComponent extends SeoBaseComponent implements OnInit {
  public isLoading$: Observable<boolean>;
  protected override keywords: string = "knowledge, puff, up, build, up, love, Jesus, edify, edification";

  constructor(private store: Store) {
    super();
  }

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getBlogLoaded).pipe(map((isLoaded) => !isLoaded));
    this.store.dispatch(loadBlogs());
  }
}
