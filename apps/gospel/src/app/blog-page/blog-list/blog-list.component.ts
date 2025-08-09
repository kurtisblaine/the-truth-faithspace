import { CommonModule } from "@angular/common";
import { Component, effect, Input, OnInit, signal, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
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
    MatPaginatorModule,
  ],
})
export class BlogListComponent implements OnInit {
  @Input() public update = false;

  public blogs!: Signal<BlogEntity[]>;
  public pagedBlogs = signal<BlogEntity[]>([]);
  public total!: number;
  public updatedJson: string | object;

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.blogs = toSignal(this.store.select(getAllBlog));

    effect(() => {
      this.total = this.blogs().length;
      this.onPageChange({ pageIndex: 0, pageSize: 5 } as PageEvent);
    });
  }

  ngOnInit(): void {}

  onPageChange(event?: PageEvent): void {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.pagedBlogs.set(this.blogs().slice(startIndex, endIndex));
  }

  public doUpdate(blog: BlogEntity) {
    blog = { ...blog, json: toHTML(this.updatedJson as object) };

    this.store.dispatch(
      createBlog({
        blog,
      })
    );
  }
}
