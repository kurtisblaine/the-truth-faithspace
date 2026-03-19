import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig, isDevMode, provideZonelessChangeDetection } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
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
  apiKey: "AIzaSyA0wNypZ0aGkmZrZM5DfYdhNIX-suH4n4k",
  authDomain: "toastmasters211.firebaseapp.com",
  databaseURL: "https://toastmasters211-default-rtdb.firebaseio.com",
  projectId: "toastmasters211",
  storageBucket: "toastmasters211.firebasestorage.app",
  messagingSenderId: "698397529807",
  appId: "1:698397529807:web:a0be3a5a5acf7ad5cc49ba",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(ItemsEffects),
    provideState(fromItems.itemsFeatureKey, fromItems.reducer),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideHttpClient(withFetch()),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: "ignore",
      }),
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "top" }),
      withPreloading(NoPreloading)
    ),
    provideAnimations(),
    provideZonelessChangeDetection(),
    provideClientHydration(withIncrementalHydration(), withEventReplay()),
  ],
};
