import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { SeoBaseComponent } from "../../shared/components/seo-base/seo-base.component";
import { loadBlogs } from "../../state/blog/blog.actions";
import { BlogEntity } from "../../state/blog/blog.models";
import { getById } from "../../state/blog/blog.selectors";

@Component({
  selector: "blog-blog-detail",
  templateUrl: "./blog-detail.component.html",
  styleUrls: ["./blog-detail.component.scss"],
  standalone: false,
})
export class BlogDetailComponent extends SeoBaseComponent implements OnInit {
  public blog$: Observable<BlogEntity>;

  protected override keywords: string = "blog, detail, edify, Jesus, truth, love, peace, hope, rejoice";

  constructor(private store: Store, private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(loadBlogs());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog$ = this.store.select(getById(id)).pipe(tap(() => this.init()));
  }
}
