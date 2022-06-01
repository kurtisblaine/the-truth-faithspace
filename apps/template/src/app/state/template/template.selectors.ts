import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  template_FEATURE_KEY,
  State,
  templateAdapter,
} from "./template.reducer";

// Lookup the 'template' feature state managed by NgRx
export const getTemplateState =
  createFeatureSelector<State>(template_FEATURE_KEY);

const { selectAll, selectEntities } = templateAdapter.getSelectors();

export const gettemplateLoaded = createSelector(
  getTemplateState,
  (state: State) => state.loaded
);

export const gettemplateError = createSelector(
  getTemplateState,
  (state: State) => state.error
);

export const getAlltemplate = createSelector(getTemplateState, (state: State) =>
  selectAll(state)
);

export const gettemplateEntities = createSelector(
  getTemplateState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getTemplateState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  gettemplateEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
