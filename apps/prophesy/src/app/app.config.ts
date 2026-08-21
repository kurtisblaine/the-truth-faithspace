import { provideHttpClient } from "@angular/common/http";
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
    provideHttpClient(),
    provideAnimations(),
    provideZonelessChangeDetection(),
    provideClientHydration(withIncrementalHydration(), withEventReplay()),
    { provide: APP_POSTFIX, useValue: " | Biblical Prophesy" },
    { provide: BASE_URL, useValue: environment.baseUrl },
  ],
};
