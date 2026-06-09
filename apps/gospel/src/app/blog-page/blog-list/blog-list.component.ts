import { CommonModule, isPlatformServer } from "@angular/common";
import { Component, computed, effect, inject, Input, OnInit, PLATFORM_ID, signal, Signal } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { MatTooltipModule } from "@angular/material/tooltip";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import {
  BASE_URL,
  FilterComponent,
  LibFaIconComponent,
  LinkComponent,
  ReadonlyTextEditorComponent,
  TextEditorComponent,
} from "shared";
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
    FilterComponent,
    MatTooltipModule,
  ],
})
export class BlogListComponent implements OnInit {
  @Input() public update = false;

  public blogs!: Signal<BlogEntity[]>;
  public pagedBlogs!: Signal<BlogEntity[]>;
  public total!: Signal<number>;
  public updatedJson: string | object;

  public baseUrl = inject(BASE_URL);
  public platformId = inject(PLATFORM_ID);
  get isServer() {
    return isPlatformServer(this.platformId);
  }

  public initialPageSize = 5;
  public searchTerm = signal<string>("");
  public properties: string[] = ["title", "json"];
  public pageSize = signal(this.initialPageSize);
  public pageIndex = signal(0);

  public faLink = faArrowUpRightFromSquare;

  constructor(private store: Store) {
    this.blogs = toSignal(this.store.select(getAllBlog));

    this.pagedBlogs = computed(() => {
      const filter = this.searchTerm().toLowerCase();

      const filteredItems = this.blogs().filter(
        (item) => item.json.toString().toLowerCase().includes(filter) || item.title.toLowerCase().includes(filter)
      );

      const startIndex = this.pageIndex() * this.pageSize();
      const endIndex = startIndex + this.pageSize();
      return filteredItems.slice(startIndex, endIndex);
    });

    this.total = computed(() => {
      const filter = this.searchTerm().toLowerCase();

      const filteredItems = this.blogs().filter(
        (item) => item.json.toString().toLowerCase().includes(filter) || item.title.toLowerCase().includes(filter)
      );

      return filteredItems.length;
    });

    effect(() => {
      const _ = this.searchTerm();
      this.pageIndex.set(0);
    });
  }

  ngOnInit(): void {
    if (this.isServer) {
      this.onPageChange({ pageIndex: 0, pageSize: this.total(), length: 0 });
    }
  }

  onPageChange(event?: PageEvent): void {
    this.pageIndex.set(event.pageIndex);
    this.pageSize.set(event.pageSize);
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
