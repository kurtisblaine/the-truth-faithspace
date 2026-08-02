import { ApplicationConfig, isDevMode, provideZonelessChangeDetection } from "@angular/core";

import { DatePipe, IMAGE_LOADER, ImageLoaderConfig, provideCloudinaryLoader } from "@angular/common";
import { provideHttpClient, withFetch } from "@angular/common/http";
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
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { APP_POSTFIX, BASE_URL } from "shared";
import { environment } from "../environments/environment";
import { routes } from "./app.routes";
import { effects, metaReducers, reducers } from "./state/state.config";

const firebaseConfig = {
  apiKey: "AIzaSyCjUFfiNlVcXR03aW28ZdhCdg8_lmzk15k",
  authDomain: "blog-46974.firebaseapp.com",
  databaseURL: "https://blog-46974-default-rtdb.firebaseio.com",
  projectId: "blog-46974",
  storageBucket: "blog-46974.appspot.com",
  messagingSenderId: "836636966533",
  appId: "1:836636966533:web:62c7e8bd6e9b6ac998f3ec",
  measurementId: "G-MPQSH2L8FZ",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideEffects(effects),
    provideStore(reducers, { metaReducers }),
    provideStoreDevtools({ logOnly: !isDevMode(), autoPause: true }),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
      }),
      withComponentInputBinding(),
      withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }),
      withPreloading(NoPreloading)
    ),
    provideHttpClient(withFetch()),
    provideClientHydration(withIncrementalHydration(), withEventReplay()),
    provideZonelessChangeDetection(),
    provideCloudinaryLoader("https://res.cloudinary.com/dffihsa2y/"),
    provideAnimations(),
    { provide: APP_POSTFIX, useValue: " | The Good News" },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        // Check if this specific instance wants to bypass the loader
        if (config.loaderParams?.["bypassLoader"]) {
          return config.src;
        }
        // Default CDN logic for all other images
        return `https://res.cloudinary.com/dffihsa2y/${config.src}`;
      },
    },
    { provide: BASE_URL, useValue: environment.baseUrl },
    DatePipe,
  ],
};
