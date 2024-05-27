import { createAction, props } from "@ngrx/store";
import { Bible } from "../../models/bibles";

export const initBible = createAction("[Bibles Page] Init");

export const loadBiblesSuccess = createAction(
  "[Bibles/API] Load Bibles Success",
  props<{ bibles: Bible[] }>()
);

export const loadBiblesFailure = createAction(
  "[Bibles/API] Load Bibles Failure",
  props<{ error: any }>()
);
