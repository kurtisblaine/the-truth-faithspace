import { Route } from "@angular/router";
import { ContactPageComponent } from "./contactPage/contact-page.component";
import { HomePageComponent } from "./homePage/home-page.component";
import { ProphesyItemPageComponent } from "./prophesyItemPage/prophesy-item-page.component";
import { WelcomePageComponent } from "./welcomePage/welcome-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => WelcomePageComponent,
    title: "Biblical Prophesy",
  },
  {
    path: "prophesies",
    loadComponent: () => HomePageComponent,
  },
  {
    path: "prophesies/prophesy-item/:title",
    loadComponent: () => ProphesyItemPageComponent,
  },
  {
    path: "contact",
    loadComponent: () => ContactPageComponent,
    title: "Contact | Biblical Prophesy",
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
