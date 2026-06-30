import { Route } from "@angular/router";
import { ContactPageComponent } from "./contactPage/contact-page.component";
import { HomePageComponent } from "./homePage/home-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => HomePageComponent,
    title: "Beware of Fast Food",
  },
  {
    path: "contact",
    loadComponent: () => ContactPageComponent,
    title: "Contact | Beware of Fast Food",
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
