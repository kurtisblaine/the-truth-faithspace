import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { switchMap } from "rxjs";
import { loadBlogs } from "../../state/blog/blog.actions";
import { BlogEntity } from "../../state/blog/blog.models";
import { getById } from "../../state/blog/blog.selectors";

@Component({
  selector: "blog-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.css"],
  standalone: false,
})
export class BlogDetailComponent implements OnInit {
  public blog: BlogEntity;

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.store.dispatch(loadBlogs());

    this.route.params
      .pipe(
        switchMap((p) => {
          return this.store.select(getById(p["id"]));
        })
      )
      .subscribe((r) => {
        this.blog = r;
      });
  }
}
