import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { Observable, map } from "rxjs";
import { createBlog } from "../../state/blog/blog.actions";
import { BlogEntity } from "../../state/blog/blog.models";
import { getAllBlog } from "../../state/blog/blog.selectors";

@Component({
  selector: "blog-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.scss"],
})
export class BlogListComponent implements OnInit {
  @Input() public update = false;

  public blogs$!: Observable<BlogEntity[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.blogs$ = this.store.select(getAllBlog).pipe(map((blog) => cloneDeep(blog)));
  }

  public doUpdate(blog: BlogEntity) {
    this.store.dispatch(
      createBlog({
        blog,
      })
    );

    // this.router.navigateByUrl("edifications");
  }

  public navigate(blog) {
    this.router.navigateByUrl("edify-detail/" + blog.id, { state: { blog } });
  }
}
