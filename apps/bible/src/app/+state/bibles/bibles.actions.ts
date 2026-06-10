import { createAction, props } from "@ngrx/store";
import { Bible } from "../../models/bibles";

export const initBible = createAction("[Bibles Page] Init");

export const loadBibles = createAction("[Bibles/API] Load Bibles");

export const loadBiblesSuccess = createAction("[Bibles/API] Load Bibles Success", props<{ bibles: Bible[] }>());

export const loadBiblesFailure = createAction("[Bibles/API] Load Bibles Failure", props<{ error: any }>());

export const selectLanguage = createAction("[Bibles Page] Select Bible", props<{ bible: Bible }>());

export const selectTranslation = createAction("[Bibles Page] Select Translation", props<{ bible: Bible }>());
