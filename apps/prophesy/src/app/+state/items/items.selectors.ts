import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Tag } from "./items.models";
import * as fromItems from "./items.reducer";

export const selectItemsState = createFeatureSelector<fromItems.State>(fromItems.itemsFeatureKey);
const { selectAll, selectEntities } = fromItems.itemAdapter.getSelectors();

export const selectItemsLoaded = createSelector(selectItemsState, (state: fromItems.State) => state.loaded);

export const selectItemsError = createSelector(selectItemsState, (state: fromItems.State) => state.error);

export const selectAllItems = createSelector(selectItemsState, (state: fromItems.State) => selectAll(state));

export const selectAllCounts = createSelector(selectAllItems, (items: fromItems.ItemEntity[]) => {
  let prophesiesFromTheVeryBeginning = 0;

  const allCounts = items.reduce(
    (counts, item) => {
      if (item.bookDateRange?.book === "Genesis") {
        prophesiesFromTheVeryBeginning += 1;
      }

      item.tags.forEach((tag) => {
        if (
          tag === Tag.JesusExaltation ||
          tag === Tag.JesusResurrection ||
          tag === Tag.JesusSuffering ||
          tag === Tag.JesusDeity ||
          tag === Tag.JesusType ||
          tag === Tag.TheSonOfMan
        )
          counts.prophesiesAboutJesus += 1;

        if (tag === Tag.Unfulfilled) counts.prophesiesUnfulfilled += 1;

        if (tag === Tag.ImplicitType) counts.prophesiesImplied += 1;

        if (tag !== Tag.Unfulfilled) counts.prophesiesFulfilled += 1;

        if (tag === Tag.TheNewBirth) counts.prophesiesAboutNewBirth += 1;

        if (tag === Tag.Grace || tag === Tag.Faith || tag === Tag.Election) counts.prophesiesAboutGrace += 1;

        if (tag === Tag.EternalFire) counts.prophesiesAboutEternalHell += 1;
      });
      return counts;
    },
    {
      prophesiesFulfilled: 0,
      prophesiesUnfulfilled: 0,
      prophesiesAboutJesus: 0,
      prophesiesAboutNewBirth: 0,
      prophesiesImplied: 0,
      prophesiesAboutEternalHell: 0,
      prophesiesAboutGrace: 0,
      prophesiesFromTheVeryBeginning: 0,
    } as ProphesyCounts
  );

  allCounts.prophesiesFromTheVeryBeginning = prophesiesFromTheVeryBeginning;
  return allCounts;
});

export type ProphesyCounts = {
  prophesiesFulfilled: number;
  prophesiesUnfulfilled: number;
  prophesiesAboutJesus: number;
  prophesiesAboutNewBirth: number;
  prophesiesImplied: number;
  prophesiesAboutGrace: number;
  prophesiesAboutEternalHell: number;
  prophesiesFromTheVeryBeginning: number;
};

export const selectAllAvailableTags = createSelector(selectAllItems, (items: fromItems.ItemEntity[]) =>
  items.reduce((tags, item) => {
    item.tags.forEach((t) => {
      tags.some((st) => st === t) ? t : tags.push(t);
    });

    return Object.values(tags).sort((a, b) => a.localeCompare(b));
  }, [] as Tag[])
);

export const selectAllTags = createSelector(selectAllItems, (items: fromItems.ItemEntity[]) =>
  Object.entries(Tag).map(([_, tag]) => tag)
);

export const getById = (id: string) =>
  createSelector(selectItemsState, (state: fromItems.State) => state.entities[id]!);

export const getByUrl = (url: string) =>
  createSelector(selectAllItems, (items: fromItems.ItemEntity[]) => items.find((i) => i.url === url));
