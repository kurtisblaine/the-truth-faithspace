import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./homePage/home.module").then((m) => m.HomeModule),
  },
  {
    path: "server",
    title: "Server | Beware of Idols",
    loadChildren: () => import("./serverPage/server-page.module").then((m) => m.ServerModule),
  },
  {
    path: "items",
    loadChildren: () => import("./itemsPage/items-page.module").then((m) => m.ItemsModule),
  },
  { path: "**", redirectTo: "error" },
];
