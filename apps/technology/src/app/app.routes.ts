import { Routes } from "@angular/router";
import { HomeComponent } from "./homePage/home.component";

export const routes: Routes = [
  {
    path: "server/777c7c75-cdf7-4c51-beab-3ef81d6a5777",
    loadChildren: () => import("./serverPage/server-page.component").then((m) => m.ServerPageComponent),
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "items",
    loadChildren: () => import("./itemsPage/items-page.module").then((m) => m.ItemsModule),
  },
];
