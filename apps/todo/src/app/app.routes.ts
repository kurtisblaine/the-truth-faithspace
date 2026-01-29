import { Route } from "@angular/router";
import { ContactPageComponent } from "./contactPage/contact-page.component";
import { HomePageComponent } from "./homePage/home-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => HomePageComponent,
    title: "TODO",
  },
  {
    path: "contact",
    loadComponent: () => ContactPageComponent,
    title: "Contact | TODO",
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
