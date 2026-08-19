import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Tag } from "../items.database";
import * as fromItems from "./items.reducer";

export const selectItemsState = createFeatureSelector<fromItems.State>(fromItems.itemsFeatureKey);
const { selectAll, selectEntities } = fromItems.itemAdapter.getSelectors();

export const selectItemsLoaded = createSelector(selectItemsState, (state: fromItems.State) => state.loaded);

export const selectItemsError = createSelector(selectItemsState, (state: fromItems.State) => state.error);

export const selectAllItems = createSelector(selectItemsState, (state: fromItems.State) => selectAll(state));

export const selectAllTags = createSelector(selectAllItems, (items: fromItems.ItemEntity[]) =>
  items.reduce((tags, item) => {
    item.tags.forEach((t) => {
      tags.some((st) => st === t) ? t : tags.push(t);
    });

    return Object.values(tags).sort((a, b) => a.localeCompare(b));
  }, [] as Tag[])
);

export const getById = (id: string) =>
  createSelector(selectItemsState, (state: fromItems.State) => state.entities[id]!);

export const getByUrl = (url: string) =>
  createSelector(selectAllItems, (items: fromItems.ItemEntity[]) => items.find((i) => i.url === url));
