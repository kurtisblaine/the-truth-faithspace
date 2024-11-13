import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromStudy from "./study.reducer";

export const selectStudyState = createFeatureSelector<fromStudy.State>(fromStudy.studyFeatureKey);

const { selectAll, selectEntities } = fromStudy.studyAdapter.getSelectors();

export const getStudyLoaded = createSelector(selectStudyState, (state: fromStudy.State) => state.loaded);

export const getStudyError = createSelector(selectStudyState, (state: fromStudy.State) => state.error);

export const getAllStudy = createSelector(selectStudyState, (state: fromStudy.State) => selectAll(state));

export const getById = (id: string) => createSelector(selectStudyState, (state: fromStudy.State) => state.entities[id]);

export const getStudyEntities = createSelector(selectStudyState, (state: fromStudy.State) => selectEntities(state));

export const getSelectedId = createSelector(selectStudyState, (state: fromStudy.State) => state.id);

export const getSelected = createSelector(getStudyEntities, getSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);
