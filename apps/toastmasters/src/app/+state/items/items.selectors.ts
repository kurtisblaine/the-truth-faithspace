import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromItems from "./items.reducer";

export const selectItemsState = createFeatureSelector<fromItems.State>(fromItems.itemsFeatureKey);
const { selectAll, selectEntities } = fromItems.itemAdapter.getSelectors();

export const selectItemsLoaded = createSelector(selectItemsState, (state: fromItems.State) => state.loaded);

export const selectItemsError = createSelector(selectItemsState, (state: fromItems.State) => state.error);

export const selectAllItems = createSelector(selectItemsState, (state: fromItems.State) => selectAll(state));

export const getById = (id: string) => createSelector(selectItemsState, (state: fromItems.State) => state.entities[id]);
