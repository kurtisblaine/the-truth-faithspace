import { createAction, createActionGroup, props } from "@ngrx/store";
import { Bible } from "../models/bibles";
import { Book } from "../models/books";

export const initBible = createAction("[Bibles Page] Init");

export const loadBiblesSuccess = createAction(
  "[Bibles/API] Load Bibles Success",
  props<{ bibles: Bible[] }>()
);

export const loadBiblesFailure = createAction(
  "[Bibles/API] Load Bibles Failure",
  props<{ error: any }>()
);

export const ScriptureActions = createActionGroup({
  source: "Scripture",
  events: {
    "Load Scripture": props<{ id: string; chapter: string }>(),
    "Load Scripture Success": props<{ data: Book[] }>(),
    "Load Scripture Failure": props<{ error: unknown }>(),
  },
});
