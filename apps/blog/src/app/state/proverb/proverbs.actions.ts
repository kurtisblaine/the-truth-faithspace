import { createAction, props } from "@ngrx/store";
import { ProverbEntity } from "./proverb.models";

export const loadProverbs = createAction("[Proverb/API] Load Proverb");

export const loadProverbsSuccess = createAction(
  "[Proverb/API] Load Proverb Success",
  props<{ proverb: ProverbEntity[] }>()
);

export const loadProverbsFailure = createAction(
  "[Proverb/API] Load Proverb Failure",
  props<{ error: any }>()
);

export const createProverb = createAction(
  "[Proverb/API] Create Proverb",
  props<{ proverb: ProverbEntity }>()
);

export const createProverbSuccess = createAction(
  "[Proverb/API] Create Proverb Success",
  props<{ proverb: ProverbEntity }>()
);

export const createProverbFailure = createAction(
  "[Proverb/API] Create Proverb Failure",
  props<{ error: any }>()
);
