import { Routes } from "@angular/router";
import { AuthGuard } from "shared";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./homePage/home.module").then((m) => m.HomeModule),
  },
  {
    path: "items",
    loadChildren: () => import("./itemsPage/items-page.module").then((m) => m.ItemsModule),
  },
  {
    path: "server",
    title: "Server | Beware of Idols",
    loadComponent: () => import("./serverPage/loginPage/login-page.component").then((c) => c.LoginComponent),
  },
  {
    path: "server/777c7c75-cdf7-4c51-beab-3ef81d6a5777",
    title: "LIVE DATA! | Beware of Idols",
    loadComponent: () => import("./serverPage/server-page.component").then((c) => c.ServerPageComponent),
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "error" },
];
