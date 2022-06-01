import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as PsalmActions from "./psalm.actions";
import { PsalmEntity } from "./psalm.models";

export const PSALM_FEATURE_KEY = "psalm";

export interface State extends EntityState<PsalmEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const psalmAdapter: EntityAdapter<PsalmEntity> =
  createEntityAdapter<PsalmEntity>();

export const initialState: State = psalmAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const psalmReducer = createReducer(
  initialState,
  on(PsalmActions.loadPsalms, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(PsalmActions.loadPsalmsSuccess, (state, { psalm }) =>
    psalmAdapter.setAll(psalm, { ...state, loaded: true })
  ),
  on(PsalmActions.loadPsalmsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return psalmReducer(state, action);
}
