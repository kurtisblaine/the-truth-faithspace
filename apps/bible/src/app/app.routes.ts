/* eslint-disable @typescript-eslint/no-unused-vars */
import { ActivatedRouteSnapshot, DetachedRouteHandle, Route, RouteReuseStrategy } from "@angular/router";
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
    path: "tongue/:languageName/bible/:bibleId/book/:bookId",
    component: ChapterPageComponent,
  },
  {
    path: "tongue/:languageName/bible/:bibleId/book/:bookId/chapter/:chapterId",
    component: ScripturePageComponent,
  },
  { path: "", component: LanguagePageComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

export class DefaultRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false; // <-- Here is the critical line of code which forces re-creation of the component
  }
}
