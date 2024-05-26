import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";

import * as BooksActions from "./books.actions";
import { BiblesEntity } from "./books.models";

export const BOOKS_FEATURE_KEY = "books";

export interface BooksState extends EntityState<BiblesEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface BooksPartialState {
  readonly [BOOKS_FEATURE_KEY]: BooksState;
}

export const booksAdapter: EntityAdapter<BiblesEntity> =
  createEntityAdapter<BiblesEntity>();

export const initialBooksState: BooksState = booksAdapter.getInitialState({
  loaded: false,
});

const reducer = createReducer(
  initialBooksState,
  on(BooksActions.initBible, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BooksActions.loadBiblesSuccess, (state, { bibles }) =>
    booksAdapter.setAll(bibles, { ...state, loaded: true })
  ),
  on(BooksActions.loadBiblesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function booksReducer(state: BooksState | undefined, action: Action) {
  return reducer(state, action);
}
