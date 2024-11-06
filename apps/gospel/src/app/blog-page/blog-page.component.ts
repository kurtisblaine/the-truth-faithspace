import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { loadBlogs } from "../state/blog/blog.actions";
import { getBlogLoaded } from "../state/blog/blog.selectors";

@Component({
  selector: "blog-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.scss"],
})
export class BlogPageComponent implements OnInit {
  public isLoading$: Observable<boolean>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(getBlogLoaded).pipe(map((isLoaded) => !isLoaded));
    this.store.dispatch(loadBlogs());
  }
}
