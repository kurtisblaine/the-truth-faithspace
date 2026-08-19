import { Route } from "@angular/router";
import { ContactPageComponent } from "./contactPage/contact-page.component";
import { HomePageComponent } from "./homePage/home-page.component";
import { ProphesyItemPageComponent } from "./prophesyItemPage/prophesy-item-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => HomePageComponent,
    title: "Biblical Prophesy",
  },
  {
    path: "prophesy-item/:title",
    loadComponent: () => ProphesyItemPageComponent,
  },
  {
    path: "contact",
    loadComponent: () => ContactPageComponent,
    title: "Contact | Biblical Prophesy",
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
