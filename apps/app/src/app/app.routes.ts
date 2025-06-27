import { Route } from "@angular/router";
import { HomePageComponent } from "./homePage/home-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    component: HomePageComponent,
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
