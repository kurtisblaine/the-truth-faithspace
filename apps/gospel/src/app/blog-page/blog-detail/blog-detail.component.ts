import { DatePipe } from "@angular/common";
import { Component, effect, OnInit, Signal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { SeoBaseComponent } from "shared";
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
  public blog: Signal<BlogEntity>;

  protected override keywords: string = "blog, detail, edify, Jesus, truth, love, peace, hope, rejoice";

  constructor(private store: Store, private route: ActivatedRoute, private datePipe: DatePipe) {
    super();

    effect(() => {
      if (!this.blog()?.id) return;

      this.setTitle(this.blog().title);
      const date = this.datePipe.transform(this.blog().date);
      this.setDescription(`${date}: ${this.blog().title}. A Christian's edification on the following topic.`);
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadBlogs());

    const id = this.route.snapshot.paramMap.get("id");
    this.blog = this.store.selectSignal(getById(id));
  }
}
