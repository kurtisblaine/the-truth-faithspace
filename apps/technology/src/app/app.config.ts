import { ApplicationConfig, isDevMode, provideZonelessChangeDetection } from "@angular/core";
import {
  NoPreloading,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from "@angular/router";

import { DatePipe } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getAuth, provideAuth } from "@angular/fire/auth";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from "@angular/material/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { APP_POSTFIX, BASE_URL } from "../../../../libs/src";
import { environment } from "../environments/environment";
import { ItemsEffects } from "./+state/items/items.effects";
import * as fromItems from "./+state/items/items.reducer";
import { routes } from "./app.routes";

const firebaseConfig = {
  apiKey: "AIzaSyC8YgMCvY1HHN4M8KfKx082QE96wGm9JA0",
  authDomain: "shining-light-on-the-dark-web.firebaseapp.com",
  databaseURL: "https://shining-light-on-the-dark-web-default-rtdb.firebaseio.com",
  projectId: "shining-light-on-the-dark-web",
  storageBucket: "shining-light-on-the-dark-web.appspot.com",
  messagingSenderId: "230757662727",
  appId: "1:230757662727:web:78560ac1fbebad1cd76aa2",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(ItemsEffects),
    provideState(fromItems.itemsFeatureKey, fromItems.reducer),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
        paramsInheritanceStrategy: "always",
      }),
      withPreloading(NoPreloading),
      withInMemoryScrolling(),
      withComponentInputBinding()
    ),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideHttpClient(),
    provideAnimations(),
    provideZonelessChangeDetection(),
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: {
        animation: {
          enterDuration: 300,
          exitDuration: 0,
        },
      } as RippleGlobalOptions,
    },
    { provide: APP_POSTFIX, useValue: " | Beware of Idols" },
    { provide: BASE_URL, useValue: environment.baseUrl },
    DatePipe,
  ],
};
