import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input as RouteInput,
} from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { BibleApiService } from "../+state/bible-api.service";
import { selectChapterEntity } from "../+state/chapters/chapters.selectors";
import { Scripture } from "../models/scripture";

@Component({
  selector: "app-scripture-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./scripture-page.component.html",
  styleUrl: "./scripture-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScripturePageComponent implements OnInit {
  @RouteInput() public bibleId: string;
  @RouteInput() public bookId: string;
  @RouteInput() public languageId: string;
  @RouteInput() public chapterId: string;

  constructor(
    private store: Store,
    private router: Router,
    private bibleApi: BibleApiService
  ) {}

  public scripture$!: Observable<Scripture>;
  public isLoading$!: Observable<boolean>;
  public chapter$!: Observable<string>;

  ngOnInit(): void {
    this.scripture$ = this.bibleApi.getScripture(this.bibleId, this.chapterId);
    this.chapter$ = this.store
      .select(selectChapterEntity)
      .pipe(map((r) => r.number));
  }
}
