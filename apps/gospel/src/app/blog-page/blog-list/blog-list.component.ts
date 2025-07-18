import { CommonModule } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { cloneDeep } from "lodash-es";
import { toHTML } from "ngx-editor";
import { Observable, map } from "rxjs";
import { LibFaIconComponent, ReadonlyTextEditorComponent, TextEditorComponent } from "shared";
import { LinkComponent } from "../../shared/components/link-redirect/link.component";
import { createBlog } from "../../state/blog/blog.actions";
import { BlogEntity } from "../../state/blog/blog.models";
import { getAllBlog } from "../../state/blog/blog.selectors";

@Component({
  selector: "blog-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.scss"],
  imports: [
    MatDividerModule,
    CommonModule,
    MatButtonModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    LibFaIconComponent,
    LinkComponent,
  ],
})
export class BlogListComponent implements OnInit {
  @Input() public update = false;

  public blogs$!: Observable<BlogEntity[]>;
  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.blogs$ = this.store.select(getAllBlog).pipe(map((blog) => cloneDeep(blog)));
  }

  public doUpdate(blog: BlogEntity) {
    blog.json = toHTML(blog.json as object);
    this.store.dispatch(
      createBlog({
        blog,
      })
    );
  }
}
