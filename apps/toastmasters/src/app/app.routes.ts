import { Route } from "@angular/router";
import { AboutPageComponent } from "./aboutPage/about-page.component";
import { LocationPageComponent } from "./aboutPage/locationPage/location-page.component";
import { MembershipPageComponent } from "./aboutPage/membershipPage/membership-page.component";
import { BlogPageComponent } from "./blogPage/blog-page.component";
import { ContactPageComponent } from "./contactPage/contact-page.component";
import { HomePageComponent } from "./homePage/home-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => HomePageComponent,
    title: "Toastmasters",
  },
  {
    path: "contact",
    loadComponent: () => ContactPageComponent,
    title: "Contact | Toastmasters",
  },
  {
    path: "about",
    loadComponent: () => AboutPageComponent,
    title: "About | Toastmasters",
    children: [
      {
        path: "location",
        loadComponent: () => LocationPageComponent,
        title: "Location | Toastmasters",
      },
      {
        path: "membership",
        loadComponent: () => MembershipPageComponent,
        title: "Membership | Toastmasters",
      },
    ],
  },
  {
    path: "blog",
    loadComponent: () => BlogPageComponent,
    title: "Blog | Toastmasters",
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
