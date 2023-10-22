import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, discernAdapter, discernsFeatureKey } from "./discern.reducer";

export const getDiscernsState =
  createFeatureSelector<State>(discernsFeatureKey);

const { selectAll, selectEntities } = discernAdapter.getSelectors();

export const getDiscernLoaded = createSelector(
  getDiscernsState,
  (state: State) => state.loaded
);

export const getDiscernError = createSelector(
  getDiscernsState,
  (state: State) => state.error
);

export const getAllDiscern = createSelector(getDiscernsState, (state: State) =>
  selectAll(state)
);

export const getDiscernEntities = createSelector(
  getDiscernsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDiscernsState,
  (state: State) => state.id
);

export const getSelected = createSelector(
  getDiscernEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
