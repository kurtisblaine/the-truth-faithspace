import { createAction, props } from "@ngrx/store";
import { DiscernEntity } from "./discern.models";

export const loadDiscernments = createAction("[Discern/API] Load Discern");

export const loadDiscernmentsSuccess = createAction(
  "[Discern/API] Load Discern Success",
  props<{ discern: DiscernEntity[] }>()
);

export const loadDiscernmentsFailure = createAction("[Discern/API] Load Discern Failure", props<{ error: any }>());

export const createDiscern = createAction("[Discern/API] Create Discern", props<{ discern: DiscernEntity }>());

export const createDiscernmentsuccess = createAction(
  "[Discern/API] Create Discern Success",
  props<{ discern: DiscernEntity }>()
);

export const createDiscernFailure = createAction("[Discern/API] Create Discern Failure", props<{ error: any }>());
