import { Route } from "@angular/router";
import { Bible } from "./+state/models/bibles";
import { BibleBookPageComponent } from "./bible-book-page/bible-book-page.component";
import { BiblePageComponent } from "./bible-page/bible-page.component";

export const appRoutes: Route[] = [
  { path: "", component: BiblePageComponent },
  {
    path: "book/:id",
    component: BibleBookPageComponent,
    data: { bible: {} as Bible },
  },
];
