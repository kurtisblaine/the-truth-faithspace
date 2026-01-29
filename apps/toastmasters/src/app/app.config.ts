import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, isDevMode, provideZonelessChangeDetection } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
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
import { ItemsEffects } from "./+state/items/items.effects";
import * as fromItems from "./+state/items/items.reducer";
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
    provideStore(),
    provideEffects(ItemsEffects),
    provideState(fromItems.itemsFeatureKey, fromItems.reducer),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
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
  ],
};
