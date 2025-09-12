import { Route } from "@angular/router";
import { CartPageComponent } from "./cartPage/cart-page.component";
import { HomePageComponent } from "./homePage/home-page.component";
import { ProductDetailPageComponent } from "./storePage/productDetailPage/product-detail-page.component";
import { StorePageComponent } from "./storePage/store-page.component";

export const appRoutes: Route[] = [
  {
    path: "",
    loadComponent: () => HomePageComponent,
  },
  {
    path: "store",
    loadComponent: () => StorePageComponent,
    children: [{ path: "product-detail/:id", loadComponent: () => ProductDetailPageComponent }],
  },
  {
    path: "cart",
    loadComponent: () => CartPageComponent,
  },

  { path: "**", redirectTo: "", pathMatch: "full" },
];
