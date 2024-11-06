import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./serverPage/server-page.module").then((m) => m.ServerModule),
  },
  {
    path: "",
    loadChildren: () => import("./homePage/home.module").then((m) => m.HomeModule),
  },
  {
    path: "",
    loadChildren: () => import("./itemsPage/items-page.module").then((m) => m.ItemsModule),
  },
];
