import { createAction, props } from "@ngrx/store";
import { BiblesEntity } from "./bibles.models";

export const initBible = createAction("[Bibles Page] Init");

export const loadBiblesSuccess = createAction(
  "[Bibles/API] Load Bibles Success",
  props<{ bibles: BiblesEntity[] }>()
);

export const loadBiblesFailure = createAction(
  "[Bibles/API] Load Bibles Failure",
  props<{ error: any }>()
);
