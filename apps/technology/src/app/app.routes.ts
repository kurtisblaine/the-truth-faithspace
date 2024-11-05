import { Routes } from "@angular/router";
import { HomeComponent } from "./homePage/home.component";

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./serverPage/server-page.module").then((m) => m.ServerModule),
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "",
    loadChildren: () => import("./itemsPage/items-page.module").then((m) => m.ItemsModule),
  },
];
