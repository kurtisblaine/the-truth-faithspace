import { Route } from "@angular/router";
import { BiblePageComponent } from "./bible-page/bible-page.component";
import { BookPageComponent } from "./book-page/book-page.component";
import { ChapterPageComponent } from "./chapter-page/chapter-page.component";
import { LanguagePageComponent } from "./language-page/language-page.component";
import { ScripturePageComponent } from "./scripture-page/scripture-page.component";

export const appRoutes: Route[] = [
  {
    path: "tongue/:languageName",
    component: BiblePageComponent,
  },
  {
    path: "tongue/:languageName/bible/:bibleId",
    component: BookPageComponent,
  },
  {
    path: "tongue/:languageName/bible/:bibleId/book/:bookId/chapter",
    component: ChapterPageComponent,
  },
  {
    path: "tongue/:languageName/bible/:bibleId/book/:bookId/chapter/:chapterId",
    component: ScripturePageComponent,
  },
  { path: "", component: LanguagePageComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
