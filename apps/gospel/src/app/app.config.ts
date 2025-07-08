import { ApplicationConfig, provideZonelessChangeDetection } from "@angular/core";

import { provideCloudinaryLoader } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideClientHydration, withEventReplay, withIncrementalHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
  NoPreloading,
  provideRouter,
  Routes,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withInMemoryScrolling,
  withPreloading,
  withRouterConfig,
} from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
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

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "truth" },
  {
    path: "home",
    loadChildren: () => import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "truth",
    title: "The Good News of the Kingdom of God",
    loadChildren: () => import("./gospel-page/gospel-page.module").then((m) => m.GospelPageModule),
  },
  {
    path: "poems",
    loadChildren: () => import("./psalm-page/psalm-page.module").then((m) => m.PsalmPageModule),
  },
  {
    path: "edifications",
    loadChildren: () => import("./blog-page/blog-page.module").then((m) => m.BlogPageModule),
  },
  {
    path: "insights",
    loadChildren: () => import("./insight-page/insight-page.module").then((m) => m.InsightPageModule),
  },
  {
    path: "email",
    loadChildren: () => import("./email-page/email-page.module").then((m) => m.EmailPageModule),
  },
  {
    path: "discernments",
    loadChildren: () => import("./discern-page/discern-page.module").then((m) => m.DiscernPageModule),
  },
  {
    path: "tracts",
    loadChildren: () => import("./tract-page/tract-page.module").then((m) => m.TractPageModule),
  },
  {
    path: "drawings",
    title: "Drawings",
    loadChildren: () => import("./draw-page/draw-page.module").then((m) => m.DrawPageModule),
  },
  {
    path: "studies",
    loadChildren: () => import("./study-page/study-page.module").then((m) => m.StudyPageModule),
  },
  {
    path: "server",
    loadChildren: () => import("./server-page/server-page.module").then((m) => m.ServerPageModule),
  },
  { path: "**", redirectTo: "error" },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideEffects(effects),
    provideStoreDevtools(),
    provideStore(reducers, { metaReducers }),
    provideRouter(
      routes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
      }),
      withComponentInputBinding(),
      withInMemoryScrolling(),
      withPreloading(NoPreloading),
      withEnabledBlockingInitialNavigation()
    ),
    provideHttpClient(),
    provideClientHydration(withIncrementalHydration(), withEventReplay()),
    provideZonelessChangeDetection(),
    provideCloudinaryLoader("https://res.cloudinary.com/dffihsa2y/"),
    provideAnimations(),
  ],
};
