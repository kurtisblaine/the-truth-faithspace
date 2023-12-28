import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, proverbAdapter, proverbsFeatureKey } from "./proverbs.reducer";

export const getProverbsState =
  createFeatureSelector<State>(proverbsFeatureKey);

const { selectAll, selectEntities } = proverbAdapter.getSelectors();

export const getProverbLoaded = createSelector(
  getProverbsState,
  (state: State) => state.loaded
);

export const getProverbError = createSelector(
  getProverbsState,
  (state: State) => state.error
);

export const getById = (id: string) =>
  createSelector(getProverbsState, (state: State) => state.entities[id]);

export const getAllProverb = createSelector(getProverbsState, (state: State) =>
  selectAll(state)
);

export const getProverbEntities = createSelector(
  getProverbsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getProverbsState,
  (state: State) => state.id
);

export const getSelected = createSelector(
  getProverbEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
