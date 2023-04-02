import { createAction, props } from "@ngrx/store";
import { PsalmEntity } from "./psalm.models";

export const loadPsalms = createAction("[Psalm/API] Load Psalms");

export const loadPsalmsSuccess = createAction(
  "[Psalm/API] Load Psalms Success",
  props<{ psalm: PsalmEntity[] }>()
);

export const loadPsalmsFailure = createAction(
  "[Psalm/API] Load Psalms Failure",
  props<{ error: any }>()
);

export const updatePsalms = createAction(
  "[Psalm/API] Update Psalms",
  props<{ psalm: PsalmEntity }>()
);

export const updatePsalmsSuccess = createAction(
  "[Psalm/API] Update Psalms Success",
  props<{ psalm: PsalmEntity }>()
);

export const updatePsalmsFailure = createAction(
  "[Psalm/API] Update Psalms Failure",
  props<{ error: any }>()
);

export const createPsalm = createAction(
  "[Psalm/API] Create Psalm",
  props<{ psalm: PsalmEntity }>()
);

export const createPsalmSuccess = createAction(
  "[Psalm/API] Create Psalm Success",
  props<{ psalm: PsalmEntity }>()
);

export const updatePsalmSuccess = createAction(
  "[Psalm/API] Update Psalm Success",
  props<{ psalm: PsalmEntity }>()
);

export const createPsalmFailure = createAction(
  "[Psalm/API] Create Psalm Failure",
  props<{ error: any }>()
);
