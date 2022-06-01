import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PSALM_FEATURE_KEY, State, psalmAdapter } from "./psalm.reducer";

// Lookup the 'Blog' feature state managed by NgRx
export const getPsalmState = createFeatureSelector<State>(PSALM_FEATURE_KEY);

const { selectAll, selectEntities } = psalmAdapter.getSelectors();

export const getBlogLoaded = createSelector(
  getPsalmState,
  (state: State) => state.loaded
);

export const getBlogError = createSelector(
  getPsalmState,
  (state: State) => state.error
);

export const getAllBlog = createSelector(getPsalmState, (state: State) =>
  selectAll(state)
);

export const getBlogEntities = createSelector(getPsalmState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getPsalmState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBlogEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
