import { createFeatureSelector, createSelector } from "@ngrx/store";
import { State, insightAdapter, insightsFeatureKey } from "./insights.reducer";

export const getInsightsState = createFeatureSelector<State>(insightsFeatureKey);

const { selectAll, selectEntities } = insightAdapter.getSelectors();

export const getInsightLoaded = createSelector(getInsightsState, (state: State) => state.loaded);

export const getInsightError = createSelector(getInsightsState, (state: State) => state.error);

export const getById = (id: string) => createSelector(getInsightsState, (state: State) => state.entities[id]);

export const getAllInsight = createSelector(getInsightsState, (state: State) => selectAll(state));

export const getInsightEntities = createSelector(getInsightsState, (state: State) => selectEntities(state));

export const getSelectedId = createSelector(getInsightsState, (state: State) => state.id);

export const getSelected = createSelector(getInsightEntities, getSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);
