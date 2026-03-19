import { Route } from "@angular/router";
import { AboutPageComponent } from "./aboutPage/about-page.component";
import { ItemDetailComponent } from "./blogDetailPage/blog-detail-page.component";
import { BlogPageComponent } from "./blogPage/blog-page.component";
import { ContactPageComponent } from "./contactPage/contact-page.component";
import { HomePageComponent } from "./homePage/home-page.component";
import { LocationPageComponent } from "./locationPage/location-page.component";
import { LoginPageComponent } from "./loginPage/login-page.component";
import { MembershipPageComponent } from "./membershipPage/membership-page.component";
import { ServerPageComponent } from "./serverPage/server-page.component";

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
  },
  {
    path: "about/location",
    loadComponent: () => LocationPageComponent,
    title: "Location | Toastmasters",
  },
  {
    path: "about/membership",
    loadComponent: () => MembershipPageComponent,
    title: "Membership | Toastmasters",
  },
  {
    path: "blogs",
    loadComponent: () => BlogPageComponent,
    title: "Blog | Toastmasters",
  },
  {
    path: "blogs/blog-detail/:id",
    loadComponent: () => ItemDetailComponent,
    title: "Blog Detail | Toastmasters",
  },
  {
    path: "server",
    loadComponent: () => LoginPageComponent,
    title: "Server | Toastmasters",
  },
  {
    path: "server/b3228e35-dbb3-4d66-b455-9b81d87d7d0f",
    loadComponent: () => ServerPageComponent,
    title: "LIVE DATA! | Toastmasters",
  },
  { path: "**", redirectTo: "", pathMatch: "full" },
];
