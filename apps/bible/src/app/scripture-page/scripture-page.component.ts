import { CdkVirtualScrollViewport, ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, Input as RouteInput, ViewChild } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { BibleApiService } from "../+state/bible-api.service";
import { selectEntity } from "../+state/books/books.selectors";
import { selectChapterEntity, selectChaptersCount } from "../+state/chapters/chapters.selectors";
import { Scripture } from "../models/scripture";
import { MyDataSource } from "./data-source";

@Component({
  selector: "app-scripture-page",
  standalone: true,
  imports: [CommonModule, MatCardModule, ScrollingModule],
  templateUrl: "./scripture-page.component.html",
  styleUrl: "./scripture-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScripturePageComponent implements OnInit {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageName: string;
  @RouteInput() public chapterId: string;

  @ViewChild(CdkVirtualScrollViewport, { static: true })
  private cdkVirtualScrollViewport!: CdkVirtualScrollViewport;

  public selectedBook$!: Observable<string>;

  constructor(private store: Store, private router: Router, private bibleApi: BibleApiService) {}

  public scripture$!: Observable<Scripture>;
  public isLoading$!: Observable<boolean>;
  public chapter$!: Observable<string>;
  public chapterCount!: number;
  dataSource: MyDataSource;

  ngOnInit(): void {
    this.scripture$ = this.bibleApi.getScripture(this.bibleId, this.chapterId);
    this.chapter$ = this.store.select(selectChapterEntity).pipe(map((r) => r.number));

    this.selectedBook$ = this.store.select(selectEntity).pipe(map((r) => r.name));

    this.store.select(selectChaptersCount).subscribe((total) => {
      this.chapterCount = total;
      this.dataSource = new MyDataSource(this.bibleApi, this.bibleId, this.bookId, total);
    });
  }

  calculateContainerHeight() {
    this.cdkVirtualScrollViewport.checkViewportSize();
  }
}
