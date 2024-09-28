import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as _ from "lodash-es";
import { Script, SortedBibles } from "../../models/bibles";
import { BIBLES_FEATURE_KEY, BiblesState, biblesAdapter } from "./bibles.reducer";

export const selectBiblesState = createFeatureSelector<BiblesState>(BIBLES_FEATURE_KEY);

const { selectAll, selectEntities } = biblesAdapter.getSelectors();

export const selectBiblesLoaded = createSelector(selectBiblesState, (state: BiblesState) => state.loaded);

export const selectBiblesFetched = createSelector(selectBiblesState, (state: BiblesState) => state.fetched);

export const selectBiblesError = createSelector(selectBiblesState, (state: BiblesState) => state.error);

export const selectAllBibles = createSelector(selectBiblesState, (state: BiblesState) => selectAll(state));

export const selectBiblesEntities = createSelector(selectBiblesState, (state: BiblesState) => selectEntities(state));

export const selectSelectedId = createSelector(selectBiblesState, (state: BiblesState) => state.selectedId);

export const selectTranslationId = createSelector(
  selectBiblesState,
  (state: BiblesState) => state.selectedTranslationId
);

export const selectLanguageEntity = createSelector(selectAllBibles, selectSelectedId, (bibles, selectedId) =>
  selectedId ? bibles.find((b) => b.language.id == selectedId) : undefined
);

export const selectTranslationEntity = createSelector(selectAllBibles, selectTranslationId, (bibles, translationId) =>
  translationId ? bibles.find((b) => b.id == translationId) : undefined
);

export const selectAllCountries = createSelector(selectAllBibles, (bibles) => {
  const allCountries = _.flatMap(bibles, (book) => book.countries);
  return [...new Set(allCountries.map((c) => c.name))];
});

export const selectAllGroupedCountries = createSelector(selectAllBibles, selectAllCountries, (bibles, countries) =>
  bibles
    .reduce(
      (countryNodes, book) => {
        book.countries.forEach((country) => {
          const foundCountry = countryNodes.find((n) => n.name == country.name);

          foundCountry.sortedBibles.push({ ...book });
        });
        return countryNodes;
      },
      countries.map((c) => ({ name: c, sortedBibles: [] } as SortedBibles))
    )
    .sort((a, b) => (a.name < b.name ? -1 : 1))
);

export const selectAllLanguages = createSelector(selectAllBibles, (bibles) => {
  const allLanguages = bibles.map((book) => book.language.name);
  return [...new Set(allLanguages)];
});

export const selectAllGroupedLanguages = createSelector(selectAllBibles, selectAllLanguages, (bibles, languages) =>
  bibles
    .reduce(
      (sortedBibles, book) => {
        const foundLanguage = sortedBibles.find((n) => n.name == book.language.name);
        foundLanguage.sortedBibles.push({ ...book });
        return sortedBibles;
      },
      languages.map((c) => ({ name: c, sortedBibles: [] } as SortedBibles))
    )
    .sort((a, b) => (a.name < b.name ? -1 : 1))
);

export const getEnglishGroup = createSelector(selectAllGroupedLanguages, (languages) =>
  languages.find((l) => l.sortedBibles[0].language.id == "eng")
);

export const getBibleByLanguageName = (name: string) =>
  createSelector(
    selectAllGroupedLanguages,
    (languages) => languages.find((l) => l.sortedBibles[0].language.name == name)?.sortedBibles
  );

export const selectAllScripts = createSelector(selectAllBibles, (bibles) => {
  const allScripts = bibles.map((book) => book.language.script);
  return [...new Set(allScripts)];
});

export const selectAllGroupedScripts = createSelector(selectAllBibles, selectAllScripts, (bibles, scripts) =>
  bibles
    .reduce(
      (sortedBibles, book) => {
        const foundScript = sortedBibles.find((n) => n.name == book.language.script);
        foundScript.sortedBibles.push({ ...book });
        return sortedBibles;
      },
      scripts.map((c) => ({ name: c, sortedBibles: [] } as SortedBibles))
    )
    .sort((a, b) => (a.name < b.name ? -1 : 1))
);

export const selectAllScriptsWithDirection = createSelector(selectAllBibles, (bibles) => [
  ...new Set(
    bibles.map(
      (b) =>
        ({
          script: b.language.script,
          scriptDirection: b.language.scriptDirection,
        } as Script)
    )
  ),
]);
