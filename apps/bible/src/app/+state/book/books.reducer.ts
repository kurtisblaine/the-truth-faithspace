import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as BooksActions from "./books.actions";
import { BooksEntity } from "./books.models";

export const BOOKS_FEATURE_KEY = "books";

export interface BooksState extends EntityState<BooksEntity> {
  selectedId?: string | number; // which Books record has been selected
  loaded: boolean; // has the Books list been loaded
  error?: string | null; // last known error (if any)
}

export interface BooksPartialState {
  readonly [BOOKS_FEATURE_KEY]: BooksState;
}

export const booksAdapter: EntityAdapter<BooksEntity> =
  createEntityAdapter<BooksEntity>();

export const initialBooksState: BooksState = booksAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const reducer = createReducer(
  initialBooksState,
  on(BooksActions.initBooks, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BooksActions.loadBooksSuccess, (state, { books }) =>
    booksAdapter.setAll(books, { ...state, loaded: true })
  ),
  on(BooksActions.loadBooksFailure, (state, { error }) => ({ ...state, error }))
);

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action);
}
