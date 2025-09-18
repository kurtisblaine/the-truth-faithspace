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
    title: "Store | Flares of Glory",
  },
  {
    path: "store/product/:id",
    loadComponent: () => ProductDetailPageComponent,
    title: "Product | Flares of Glory",
  },
  {
    path: "cart",
    loadComponent: () => CartPageComponent,
    title: "Cart | Flares of Glory",
  },

  { path: "**", redirectTo: "", pathMatch: "full" },
];
