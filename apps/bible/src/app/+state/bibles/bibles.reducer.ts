import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { Bible } from "../../models/bibles";
import * as BiblesActions from "./bibles.actions";

export const BIBLES_FEATURE_KEY = "bibles";

export interface BiblesState extends EntityState<Bible> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface BiblesPartialState {
  readonly [BIBLES_FEATURE_KEY]: BiblesState;
}

export const biblesAdapter: EntityAdapter<Bible> = createEntityAdapter<Bible>();

export const initialBiblesState: BiblesState = biblesAdapter.getInitialState({
  loaded: false,
});

export const reducer = createReducer(
  initialBiblesState,
  on(BiblesActions.initBible, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BiblesActions.loadBiblesSuccess, (state, { bibles }) =>
    biblesAdapter.setAll(bibles, { ...state, loaded: true })
  ),
  on(BiblesActions.loadBiblesFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
