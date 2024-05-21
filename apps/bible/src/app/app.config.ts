import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app.routes";
import { provideStore, provideState } from "@ngrx/store";
import { provideEffects } from "@ngrx/effects";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import * as fromBooks from "./+state/book/books.reducer";
import { BooksEffects } from "./+state/book/books.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideEffects(BooksEffects),
    provideState(fromBooks.BOOKS_FEATURE_KEY, fromBooks.booksReducer),
    provideStoreDevtools({ logOnly: !isDevMode() }),
    provideEffects(),
    provideStore(),
    provideRouter(appRoutes),
  ],
};
