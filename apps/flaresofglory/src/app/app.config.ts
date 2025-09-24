import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, isDevMode, provideZonelessChangeDetection } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { provideClientHydration, withEventReplay, withIncrementalHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { provideNgxStripe } from "ngx-stripe";
import { ProductsEffects } from "./+state/products/products.effects";
import * as fromProducts from "./+state/products/products.reducer";
import { appRoutes } from "./app.routes";
import { PLUTO_ID } from "./checkoutPage/payment.service";

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(ProductsEffects),
    provideState(fromProducts.PRODUCTS_FEATURE_KEY, fromProducts.productsReducer),
    provideStore(),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideNgxStripe(),
    {
      provide: PLUTO_ID,
      useValue: "449f8516-791a-49ab-a09d-50f79a0678b6",
    },
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
        paramsInheritanceStrategy: "always",
      }),
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }),
      withPreloading(NoPreloading)
    ),
    provideHttpClient(withFetch()),
    provideAnimations(),
    provideZonelessChangeDetection(),
    provideClientHydration(withIncrementalHydration(), withEventReplay()),
  ],
};
