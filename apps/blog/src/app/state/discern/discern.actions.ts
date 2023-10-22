import { createAction, props } from "@ngrx/store";
import { DiscernEntity } from "./discern.models";

export const loadDiscerns = createAction("[Discern/API] Load Discern");

export const loadDiscernsSuccess = createAction(
  "[Discern/API] Load Discern Success",
  props<{ discern: DiscernEntity[] }>()
);

export const loadDiscernsFailure = createAction(
  "[Discern/API] Load Discern Failure",
  props<{ error: any }>()
);

export const createDiscern = createAction(
  "[Discern/API] Create Discern",
  props<{ discern: DiscernEntity }>()
);

export const createDiscernSuccess = createAction(
  "[Discern/API] Create Discern Success",
  props<{ discern: DiscernEntity }>()
);

export const createDiscernFailure = createAction(
  "[Discern/API] Create Discern Failure",
  props<{ error: any }>()
);
