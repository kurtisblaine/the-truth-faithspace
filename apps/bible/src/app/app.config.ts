import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withRouterConfig,
} from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { BibleEffects } from "./+state/bibles/bibles.effects";
import * as fromBibles from "./+state/bibles/bibles.reducer";
import { BooksEffects } from "./+state/books/books.effects";
import * as fromBooks from "./+state/books/books.reducer";
import { ChaptersEffects } from "./+state/chapters/chapters.effects";
import * as fromChapters from "./+state/chapters/chapters.reducer";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(BibleEffects, BooksEffects, ChaptersEffects),
    provideState(fromBibles.BIBLES_FEATURE_KEY, fromBibles.reducer),
    provideState(fromBooks.BOOKS_FEATURE_KEY, fromBooks.reducer),
    provideState(fromChapters.CHAPTERS_FEATURE_KEY, fromChapters.reducer),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
      }),
      withInMemoryScrolling(),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideAnimations(),
  ],
};
