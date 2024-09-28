import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromBooks from "./books.reducer";

export const selectBooksState = createFeatureSelector<fromBooks.State>(fromBooks.BOOKS_FEATURE_KEY);
const { selectAll, selectEntities } = fromBooks.booksAdapter.getSelectors();

export const selectBooksLoaded = createSelector(selectBooksState, (state: fromBooks.State) => state.loaded);

export const selectBooksFetched = createSelector(selectBooksState, (state: fromBooks.State) => state.fetched);

export const selectBooksError = createSelector(selectBooksState, (state: fromBooks.State) => state.error);

export const selectAllBooks = createSelector(selectBooksState, (state: fromBooks.State) => selectAll(state));

export const selectBooksEntities = createSelector(selectBooksState, (state: fromBooks.State) => selectEntities(state));

export const selectSelectedId = createSelector(selectBooksState, (state: fromBooks.State) => state.selectedId);

export const selectEntity = createSelector(selectAllBooks, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities.find((e) => e.id == selectedId) : undefined
);
