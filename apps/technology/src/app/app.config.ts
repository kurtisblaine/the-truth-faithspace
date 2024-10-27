import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter, withComponentInputBinding, withHashLocation, withRouterConfig } from "@angular/router";

import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from "@angular/material/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { ItemsEffects } from "./+state/items/items.effects";
import * as fromItems from "./+state/items/items.reducer";
import { routes } from "./app.routes";

const firebaseConfig = {
  apiKey: "sHJBvY4xZ6I5iQkonX52AMRUL4oESG41EorQiYT7",
  authDomain: "shining-light-on-the-dark-web.firebaseapp.com",
  databaseURL: "https://shining-light-on-the-dark-web-default-rtdb.firebaseio.com",
  projectId: "shining-light-on-the-dark-web",
  storageBucket: "shining-light-on-the-dark-web.appspot.com",
  messagingSenderId: "230757662727",
  appId: "1:230757662727:web:62c7e8bd6e9b6ac998f3ec",
  measurementId: "G-MPQSH2L8FZ",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(ItemsEffects),
    provideState(fromItems.itemsFeatureKey, fromItems.reducer),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
        paramsInheritanceStrategy: "always",
      }),
      // withInMemoryScrolling(),
      withComponentInputBinding(),
      withHashLocation()
    ),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
    provideAnimations(),
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        animation: {
          enterDuration: 300,
          exitDuration: 0,
        },
      } as RippleGlobalOptions,
    },
    // { provide: RouteReuseStrategy, useClass: DefaultRouteReuseStrategy },
  ],
};
