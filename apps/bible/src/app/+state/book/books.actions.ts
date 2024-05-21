import { createAction, props } from "@ngrx/store";
import { BooksEntity } from "./books.models";

export const initBooks = createAction("[Books Page] Init");

export const loadBooksSuccess = createAction(
  "[Books/API] Load Books Success",
  props<{ books: BooksEntity[] }>()
);

export const loadBooksFailure = createAction(
  "[Books/API] Load Books Failure",
  props<{ error: any }>()
);
