import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PSALM_FEATURE_KEY, State, psalmAdapter } from "./psalm.reducer";

export const getPsalmState = createFeatureSelector<State>(PSALM_FEATURE_KEY);

const { selectAll, selectEntities } = psalmAdapter.getSelectors();

export const getPsalmLoaded = createSelector(
  getPsalmState,
  (state: State) => state.loaded
);

export const getPsalmError = createSelector(
  getPsalmState,
  (state: State) => state.error
);

export const getAllPsalm = createSelector(getPsalmState, (state: State) =>
  selectAll(state)
);

export const getPsalmEntities = createSelector(getPsalmState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getPsalmState,
  (state: State) => state.id
);

export const getSelected = createSelector(
  getPsalmEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
