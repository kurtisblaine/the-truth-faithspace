import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  DiscernmentsFeatureKey,
  State,
  discernAdapter,
} from "./discern.reducer";

export const getDiscernmentsState = createFeatureSelector<State>(
  DiscernmentsFeatureKey
);

const { selectAll, selectEntities } = discernAdapter.getSelectors();

export const getDiscernLoaded = createSelector(
  getDiscernmentsState,
  (state: State) => state.loaded
);

export const getDiscernError = createSelector(
  getDiscernmentsState,
  (state: State) => state.error
);

export const getAllDiscern = createSelector(
  getDiscernmentsState,
  (state: State) => selectAll(state)
);

export const getDiscernEntities = createSelector(
  getDiscernmentsState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getDiscernmentsState,
  (state: State) => state.id
);

export const getSelected = createSelector(
  getDiscernEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
