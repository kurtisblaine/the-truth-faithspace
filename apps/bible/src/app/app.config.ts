import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, isDevMode, provideZonelessChangeDetection } from "@angular/core";
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from "@angular/material/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { RouteReuseStrategy, provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { BibleEffects } from "./+state/bibles/bibles.effects";
import { BooksEffects } from "./+state/books/books.effects";
import { ChaptersEffects } from "./+state/chapters/chapters.effects";
import { metaReducers, reducers } from "./+state/state.config";
import { DefaultRouteReuseStrategy, appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(reducers, { metaReducers }),
    provideEffects(BibleEffects, BooksEffects, ChaptersEffects),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
        paramsInheritanceStrategy: "always",
      }),
      withComponentInputBinding()
    ),
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
    { provide: RouteReuseStrategy, useClass: DefaultRouteReuseStrategy },
  ],
};
