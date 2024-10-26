import { Routes } from "@angular/router";
import { HomeComponent } from "./homePage/home.component";
import { ItemsComponent } from "./itemsPage/items.component";
// import { ServerPageComponent } from "./serverPage/server-page.component";

export const routes: Routes = [
  // {
  //   path: "server/777c7c75-cdf7-4c51-beab-3ef81d6a5777",
  //   component: ServerPageComponent,
  // },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "items",
    component: ItemsComponent,
  },
];
