import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, Injectable, isDevMode, provideZonelessChangeDetection } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { provideClientHydration, withEventReplay, withIncrementalHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
  ActivatedRouteSnapshot,
  BaseRouteReuseStrategy,
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { APP_POSTFIX, BASE_URL } from "shared";
import { environment } from "../environments/environment";
import { ItemsEffects } from "./+state/items/items.effects";
import { metaReducers, reducers } from "./+state/state.config";
import { appRoutes } from "./app.routes";

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

@Injectable({ providedIn: "root" })
export class CustomRouteReuseStrategy extends BaseRouteReuseStrategy {
  // Return false to tell Angular NOT to reuse the route if navigating to the same path
  override shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideEffects([ItemsEffects]),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
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
    // { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy },
    provideHttpClient(),
    provideAnimations(),
    provideZonelessChangeDetection(),
    provideClientHydration(withIncrementalHydration(), withEventReplay()),
    { provide: APP_POSTFIX, useValue: " | Biblical Prophecy" },
    { provide: BASE_URL, useValue: environment.baseUrl },
  ],
};
