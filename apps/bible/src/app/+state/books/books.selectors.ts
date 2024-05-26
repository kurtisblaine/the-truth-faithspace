import { createFeatureSelector } from "@ngrx/store";
import * as fromBooks from "./books.reducer";

export const selectBooksState = createFeatureSelector<fromBooks.State>(
  fromBooks.BOOKS_FEATURE_KEY
);
