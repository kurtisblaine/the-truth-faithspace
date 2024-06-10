import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input as RouteInput,
} from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { selectEntity } from "../+state/books/books.selectors";
import { ChaptersActions } from "../+state/chapters/chapters.actions";
import {
  selectAllChapters,
  selectChaptersLoaded,
} from "../+state/chapters/chapters.selectors";
import { Chapter } from "../models/chapters";

@Component({
  selector: "app-chapter-page",
  standalone: true,
  imports: [
    MatProgressSpinnerModule,
    CommonModule,
    MatCardModule,
    MatRippleModule,
  ],
  templateUrl: "./chapter-page.component.html",
  styleUrl: "./chapter-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterPageComponent {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageId: string;

  public chapters$!: Observable<Chapter[]>;
  public isLoading$!: Observable<boolean>;
  public selectedBook$!: Observable<string>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(
      ChaptersActions.loadChapters({ id: this.bibleId, bookId: this.bookId })
    );

    this.chapters$ = this.store.select(selectAllChapters);
    this.selectedBook$ = this.store
      .select(selectEntity)
      .pipe(map((r) => r.name));

    this.isLoading$ = this.store
      .select(selectChaptersLoaded)
      .pipe(map((r) => !r));
  }

  getScripture(chapter: Chapter) {
    this.store.dispatch(ChaptersActions.selectChapter({ id: chapter.id }));

    this.router.navigateByUrl(
      `tongue/${this.languageId}/bible/${this.bibleId}/book/${this.bookId}/chapter/${chapter.id}`
    );
  }
}
