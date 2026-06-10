import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import * as fromBibles from "./bibles/bibles.reducer";
import * as fromBooks from "./books/books.reducer";
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

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    // Rehydrate on init
    if (action.type === INIT) {
      const storageValue = localStorage.getItem("bibleStoreState");
      if (storageValue) return JSON.parse(storageValue);
    }
    const nextState = reducer(state, action);
    // Persist on change
    localStorage.setItem("bibleStoreState", JSON.stringify(nextState));
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [storageMetaReducer];
