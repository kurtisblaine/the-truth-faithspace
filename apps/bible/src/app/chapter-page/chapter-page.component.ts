import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  Input as RouteInput,
} from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { ScriptureActions } from "../+state/bibles/bibles.actions";
import { ChaptersActions } from "../+state/chapters/chapters.actions";
import {
  selectAllChapters,
  selectChaptersLoaded,
} from "../+state/chapters/chapters.selectors";
import { Chapter } from "../+state/models/chapters";

@Component({
  selector: "app-chapter-page",
  standalone: true,
  imports: [MatProgressSpinnerModule, CommonModule, MatListModule],
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

  constructor(private store: Store, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(
      ChaptersActions.loadChapters({ id: this.bibleId, bookId: this.bookId })
    );

    this.chapters$ = this.store.select(selectAllChapters);
    this.isLoading$ = this.store
      .select(selectChaptersLoaded)
      .pipe(map((r) => !r));
  }

  getScripture(chapter: Chapter) {
    this.store.dispatch(
      ScriptureActions.loadScripture({ id: this.bibleId, chapter: chapter.id })
    );
  }
}
