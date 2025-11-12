import { isPlatformServer } from "@angular/common";
import { inject, makeStateKey, PLATFORM_ID, TransferState } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { initBible } from "./bibles/bibles.actions";
import * as fromBibles from "./bibles/bibles.reducer";
import { BooksActions } from "./books/books.actions";
import * as fromBooks from "./books/books.reducer";
import { ChaptersActions } from "./chapters/chapters.actions";
import * as fromChapters from "./chapters/chapters.reducer";

export interface AppState {
  [fromBibles.BIBLES_FEATURE_KEY]: fromBibles.BiblesState;
  [fromBooks.BOOKS_FEATURE_KEY]: fromBooks.State;
  [fromChapters.CHAPTERS_FEATURE_KEY]: fromChapters.State;
}

export const reducers: ActionReducerMap<AppState> = {
  bibles: fromBibles.reducer,
  books: fromBooks.reducer,
  chapters: fromChapters.reducer,
};

export const transferStateMetaReducer = (reducer) => {
  const storeStateKey = makeStateKey<string>("bibleStoreState");

  const platformId = inject(PLATFORM_ID);
  const transferState = inject(TransferState);

  if (isPlatformServer(platformId)) {
    let lastState: any = {};
    transferState.set(storeStateKey, lastState);

    transferState.onSerialize<any>(storeStateKey, () => ({
      bibles: lastState[fromBibles.BIBLES_FEATURE_KEY],
      books: lastState[fromBooks.BOOKS_FEATURE_KEY],
      chapters: lastState[fromChapters.CHAPTERS_FEATURE_KEY],
    }));

    return (state, action) => {
      lastState = reducer(state, action);
      return lastState;
    };
  } else {
    return (state, action) => {
      const next = reducer(state, action);
      if (
        action.type === ChaptersActions.loadChapters.type ||
        action.type === BooksActions.loadBooks.type ||
        action.type === initBible.type
      ) {
        const initialState = transferState.get<any>(storeStateKey, {});
        return { ...next, ...initialState };
      }
      return next;
    };
  }
};

export const metaReducers: MetaReducer<AppState>[] = [transferStateMetaReducer];
