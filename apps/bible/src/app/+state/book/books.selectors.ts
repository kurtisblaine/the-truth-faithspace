import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as _ from "lodash-es";
import { Script, SortedBooks } from "../models/bibles";
import { BOOKS_FEATURE_KEY, BooksState, booksAdapter } from "./books.reducer";

export const selectBooksState =
  createFeatureSelector<BooksState>(BOOKS_FEATURE_KEY);

const { selectAll, selectEntities } = booksAdapter.getSelectors();

export const selectBooksLoaded = createSelector(
  selectBooksState,
  (state: BooksState) => state.loaded
);

export const selectBooksError = createSelector(
  selectBooksState,
  (state: BooksState) => state.error
);

export const selectAllBooks = createSelector(
  selectBooksState,
  (state: BooksState) => selectAll(state)
);

export const selectAllCountries = createSelector(selectAllBooks, (books) => {
  const allCountries = _.flatMap(books, (book) => book.countries);
  return [...new Set(allCountries.map((c) => c.name))];
});

export const selectAllGroupedCountries = createSelector(
  selectAllBooks,
  selectAllCountries,
  (books, countries) =>
    books
      .reduce(
        (countryNodes, book) => {
          book.countries.forEach((country) => {
            const foundCountry = countryNodes.find(
              (n) => n.name == country.name
            );

            foundCountry.group.push({ ...book });
          });
          return countryNodes;
        },
        countries.map((c) => ({ name: c, group: [] } as SortedBooks))
      )
      .sort((a, b) => (a.name < b.name ? -1 : 1))
);

export const selectAllLanguages = createSelector(selectAllBooks, (books) => {
  const allLanguages = books.map((book) => book.language.name);
  return [...new Set(allLanguages)];
});

export const selectAllGroupedLanguages = createSelector(
  selectAllBooks,
  selectAllLanguages,
  (books, languages) =>
    books
      .reduce(
        (group, book) => {
          const foundLanguage = group.find((n) => n.name == book.language.name);
          foundLanguage.group.push({ ...book });
          return group;
        },
        languages.map((c) => ({ name: c, group: [] } as SortedBooks))
      )
      .sort((a, b) => (a.name < b.name ? -1 : 1))
);

export const selectAllScripts = createSelector(selectAllBooks, (books) => {
  const allScripts = books.map((book) => book.language.script);
  return [...new Set(allScripts)];
});

export const selectAllGroupedScripts = createSelector(
  selectAllBooks,
  selectAllScripts,
  (books, scripts) =>
    books
      .reduce(
        (group, book) => {
          const foundScript = group.find((n) => n.name == book.language.script);
          foundScript.group.push({ ...book });
          return group;
        },
        scripts.map((c) => ({ name: c, group: [] } as SortedBooks))
      )
      .sort((a, b) => (a.name < b.name ? -1 : 1))
);

export const selectAllScriptsWithDirection = createSelector(
  selectAllBooks,
  (books) => [
    ...new Set(
      books.map(
        (b) =>
          ({
            script: b.language.script,
            scriptDirection: b.language.scriptDirection,
          } as Script)
      )
    ),
  ]
);

export const selectBooksEntities = createSelector(
  selectBooksState,
  (state: BooksState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectBooksState,
  (state: BooksState) => state.selectedId
);

export const selectEntity = createSelector(
  selectBooksEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
