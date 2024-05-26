import { createFeature, createReducer, on } from "@ngrx/store";
import { BooksActions } from "./books.actions";

export const BOOKS_FEATURE_KEY = "books";

export interface State {}

export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBookss, (state) => state),
  on(BooksActions.loadBookssSuccess, (state, action) => state),
  on(BooksActions.loadBookssFailure, (state, action) => state)
);

export const booksFeature = createFeature({
  name: BOOKS_FEATURE_KEY,
  reducer,
});
