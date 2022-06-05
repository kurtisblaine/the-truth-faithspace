import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getAllBlog } from "../../state/blog/blog.selectors";
import { PsalmEntity } from "../../state/psalm/psalm.models";

@Component({
  selector: "blog-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.scss"],
})
export class BlogListComponent implements OnInit {
  public blogs$!: Observable<PsalmEntity[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.blogs$ = this.store.select(getAllBlog);
  }
}
