import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BOOKS_FEATURE_KEY, BooksState, booksAdapter } from "./books.reducer";

// Lookup the 'Books' feature state managed by NgRx
export const selectBooksState =
  createFeatureSelector<BooksState>(BOOKS_FEATURE_KEY);

const { selectAll, selectEntities } = booksAdapter.getSelectors();

export const selectBooksLoaded = createSelector(
  selectBooksState,
  (state: BooksState) => state.loaded
);

export const selectBooksError = createSelector(
  selectBooksState,
  (state: BooksState) => state.error
);

export const selectAllBooks = createSelector(
  selectBooksState,
  (state: BooksState) => selectAll(state)
);

export const selectBooksEntities = createSelector(
  selectBooksState,
  (state: BooksState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectBooksState,
  (state: BooksState) => state.selectedId
);

export const selectEntity = createSelector(
  selectBooksEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
