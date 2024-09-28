import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { createFeature, createReducer, on } from "@ngrx/store";
import { Chapter } from "../../models/chapters";
import { ChaptersActions } from "./chapters.actions";

export const CHAPTERS_FEATURE_KEY = "chapters";

export interface State extends EntityState<Chapter> {
  selectedId?: string | number;
  loaded: boolean;
  fetched: boolean;
  error?: string | null;
}

export const chaptersAdapter: EntityAdapter<Chapter> = createEntityAdapter<Chapter>();

export const initialState = chaptersAdapter.getInitialState({
  loaded: false,
  fetched: false,
});

export const reducer = createReducer(
  initialState,
  // on(ChaptersActions.loadChapters, (state) =>
  //   chaptersAdapter.removeAll({
  //     ...state,
  //     loaded: false,
  //     error: null,
  //   })
  // ),
  on(ChaptersActions.selectChapter, (state, { id }) => ({
    ...state,
    selectedId: id,
  })),
  on(ChaptersActions.loadChaptersSuccess, (state, { data }) =>
    chaptersAdapter.setAll(data, { ...state, loaded: true, fetched: true })
  ),
  on(ChaptersActions.loadChaptersFailure, (state, { error }) => ({
    ...state,
    error,
    loaded: true,
  }))
);

export const chaptersFeature = createFeature({
  name: CHAPTERS_FEATURE_KEY,
  reducer,
});
