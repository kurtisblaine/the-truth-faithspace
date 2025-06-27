import { Route } from "@angular/router";
import { HomePageComponent } from "./homePage/home-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => HomePageComponent,
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
