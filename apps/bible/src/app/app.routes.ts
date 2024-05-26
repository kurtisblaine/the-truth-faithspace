import { Route } from "@angular/router";
import { BiblePageComponent } from "./bible-page/bible-page.component";
import { BookPageComponent } from "./book-page/book-page.component";
import { ChapterPageComponent } from "./chapter-page/chapter-page.component";
import { LanguagePageComponent } from "./language-page/language-page.component";

export const appRoutes: Route[] = [
  { path: "", component: LanguagePageComponent },
  {
    path: "tongue/:languageId",
    component: BiblePageComponent,
  },
  {
    path: "tongue/:languageId/bible/:bibleId",
    component: BookPageComponent,
  },
  {
    path: "tongue/:languageId/bible/:bibleId/book/:bookId/chapter",
    component: ChapterPageComponent,
  },
];
