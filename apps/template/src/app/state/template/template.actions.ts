import { createAction, props } from "@ngrx/store";
import { TemplateEntity } from "./template.models";

export const init = createAction("[Template Page] Init");

export const loadTemplateSuccess = createAction(
  "[Template/API] Load Template Success",
  props<{ template: TemplateEntity[] }>()
);

export const loadTemplateFailure = createAction(
  "[Template/API] Load Template Failure",
  props<{ error: any }>()
);
