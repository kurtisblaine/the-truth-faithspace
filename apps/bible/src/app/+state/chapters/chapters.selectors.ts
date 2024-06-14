import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromChapters from "./chapters.reducer";

export const selectChaptersState = createFeatureSelector<fromChapters.State>(
  fromChapters.CHAPTERS_FEATURE_KEY
);
const { selectAll, selectEntities } =
  fromChapters.chaptersAdapter.getSelectors();

export const selectChaptersLoaded = createSelector(
  selectChaptersState,
  (state: fromChapters.State) => state.loaded
);

export const selectChaptersError = createSelector(
  selectChaptersState,
  (state: fromChapters.State) => state.error
);

export const selectAllChapters = createSelector(
  selectChaptersState,
  (state: fromChapters.State) => selectAll(state)
);

export const selectChaptersEntities = createSelector(
  selectChaptersState,
  (state: fromChapters.State) => selectEntities(state)
);

export const selectChaptersCount = createSelector(
  selectChaptersState,
  (state: fromChapters.State) => selectAll(state).length
);

export const selectSelectedId = createSelector(
  selectChaptersState,
  (state: fromChapters.State) => state.selectedId
);

export const selectChapterEntity = createSelector(
  selectAllChapters,
  selectSelectedId,
  (entities, selectedId) =>
    selectedId ? entities.find((e) => e.id == selectedId) : undefined
);
