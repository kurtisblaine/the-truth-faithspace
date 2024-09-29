import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { createFeature, createReducer, on } from "@ngrx/store";
import { Book } from "../../models/books";
import { BooksActions } from "./books.actions";

export const BOOKS_FEATURE_KEY = "books";

export interface State extends EntityState<Book> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export const booksAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState = booksAdapter.getInitialState({
  loaded: false,
});

export const reducer = createReducer(
  initialState,
  on(BooksActions.loadBooks, (state) =>
    booksAdapter.removeAll({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(BooksActions.selectBook, (state, { id }) => ({
    ...state,
    selectedId: id,
    isDirty: true,
  })),
  on(BooksActions.loadBooksSuccess, (state, { data }) => booksAdapter.setAll(data, { ...state, loaded: true })),
  on(BooksActions.loadBooksFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export const booksFeature = createFeature({
  name: BOOKS_FEATURE_KEY,
  reducer,
});
