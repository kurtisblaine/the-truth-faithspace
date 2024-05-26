import { createAction, props } from "@ngrx/store";
import { BiblesEntity } from "./books.models";

export const initBible = createAction("[Books Page] Init");

export const loadBiblesSuccess = createAction(
  "[Books/API] Load Books Success",
  props<{ bibles: BiblesEntity[] }>()
);

export const loadBiblesFailure = createAction(
  "[Books/API] Load Books Failure",
  props<{ error: any }>()
);
