import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { provideEffects } from "@ngrx/effects";
import { provideState, provideStore } from "@ngrx/store";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { BooksEffects } from "./+state/book/books.effects";
import * as fromBooks from "./+state/book/books.reducer";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore(),
    provideEffects(BooksEffects),
    provideState(fromBooks.BOOKS_FEATURE_KEY, fromBooks.booksReducer),
    provideStoreDevtools({ logOnly: !isDevMode(), maxAge: 25 }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
  ],
};
