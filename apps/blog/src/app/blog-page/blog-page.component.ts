import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { loadBlogs } from "../state/blog/blog.actions";

@Component({
  selector: "blog-blog-page",
  templateUrl: "./blog-page.component.html",
  styleUrls: ["./blog-page.component.scss"],
})
export class BlogPageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(loadBlogs());
  }
}
