import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input as RouteInput } from "@angular/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { selectEntity } from "../+state/books/books.selectors";
import { ChaptersActions } from "../+state/chapters/chapters.actions";
import { selectAllChapters, selectChaptersLoaded } from "../+state/chapters/chapters.selectors";
import { Chapter } from "../models/chapters";
import { ChapterItemComponent } from "./chapter-item/chapter-item.component";

@Component({
  selector: "app-chapter-page",
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule, ChapterItemComponent],
  templateUrl: "./chapter-page.component.html",
  styleUrl: "./chapter-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterPageComponent {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageName: string;

  public chapters$!: Observable<Chapter[]>;
  public isLoading$!: Observable<boolean>;
  public isLoaded$!: Observable<boolean>;
  public selectedBook$!: Observable<string>;
  public allChapter!: Chapter;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.allChapter = { number: "all", bibleId: this.bibleId, bookId: this.bookId, id: "all" } as Chapter;

    this.store.dispatch(ChaptersActions.loadChapters({ id: this.bibleId, bookId: this.bookId }));

    this.chapters$ = this.store.select(selectAllChapters);
    this.selectedBook$ = this.store.select(selectEntity).pipe(map((r) => r.name));

    this.isLoading$ = this.store.select(selectChaptersLoaded).pipe(map((r) => !r));
    this.isLoaded$ = this.store.select(selectChaptersLoaded);
  }

  getScripture(chapter: Chapter) {
    this.store.dispatch(ChaptersActions.selectChapter({ id: chapter.id }));

    this.router.navigateByUrl(
      `tongue/${this.languageName}/bible/${this.bibleId}/book/${this.bookId}/chapter/${chapter.id}`
    );
  }
}
