import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";

import { Bible } from "../../models/bibles";
import * as BiblesActions from "./bibles.actions";

export const BIBLES_FEATURE_KEY = "bibles";

export interface BiblesState extends EntityState<Bible> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
  selectedTranslationId?: string | number;
}

export const biblesAdapter: EntityAdapter<Bible> = createEntityAdapter<Bible>();

export const initialBiblesState: BiblesState = biblesAdapter.getInitialState({
  loaded: false,
});

export const reducer = createReducer(
  initialBiblesState,
  on(BiblesActions.selectLanguage, (state, { bible }) => ({
    ...state,
    selectedId: bible.language.name,
  })),
  on(BiblesActions.selectTranslation, (state, { bible }) => ({
    ...state,
    selectedTranslationId: bible.id,
  })),
  on(BiblesActions.initBible, (state) =>
    biblesAdapter.removeAll({
      ...state,
      loaded: false,
      error: null,
      selectedId: null,
      selectedTranslationId: null,
    })
  ),
  on(BiblesActions.loadBiblesSuccess, (state, { bibles }) => biblesAdapter.setAll(bibles, { ...state, loaded: true })),
  on(BiblesActions.loadBiblesFailure, (state, { error }) => ({
    ...state,
    loaded: true,
    error,
  }))
);
