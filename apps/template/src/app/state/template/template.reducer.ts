import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as templateActions from "./template.actions";
import { TemplateEntity } from "./template.models";

export const template_FEATURE_KEY = "template";

export interface State extends EntityState<TemplateEntity> {
  selectedId?: string | number; // which template record has been selected
  loaded: boolean; // has the template list been loaded
  error?: string | null; // last known error (if any)
}

export interface templatePartialState {
  readonly [template_FEATURE_KEY]: State;
}

export const templateAdapter: EntityAdapter<TemplateEntity> =
  createEntityAdapter<TemplateEntity>();

export const initialState: State = templateAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const templateReducer = createReducer(
  initialState,
  on(templateActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(templateActions.loadTemplateSuccess, (state, { template }) =>
    templateAdapter.setAll(template, { ...state, loaded: true })
  ),
  on(templateActions.loadTemplateFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return templateReducer(state, action);
}
