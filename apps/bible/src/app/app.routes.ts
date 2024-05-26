import { Route } from "@angular/router";
import { BibleBookPageComponent } from "./bible-book-page/bible-book-page.component";
import { BiblePageComponent } from "./bible-page/bible-page.component";
import { LanguagePageComponent } from "./language-page/language-page.component";

export const appRoutes: Route[] = [
  { path: "", component: LanguagePageComponent },
  {
    path: "bibles/:languageName",
    component: BiblePageComponent,
  },
  {
    path: "bibles/:languageName/book/:id",
    component: BibleBookPageComponent,
  },
];
