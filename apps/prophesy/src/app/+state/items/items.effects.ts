import { Injectable, Injector } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";

import { bookDateRanges, itemsRows } from "../items.database";
import { ItemsActions } from "./items.actions";
import { ItemEntity } from "./items.reducer";
export const toKebabCase = (value: string) =>
  value
    .trim()
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .toLowerCase()
    .replace(/[-]+/g, "-to-")
    .replace(/[\s:]+/g, "-");

export const fillInData = (item: ItemEntity) => {
  const prophesyBook = item.prophesy.match(/\((?!\.{3})([^)]+)\)/g)?.[0] ?? "";

  return {
    ...item,
    book: prophesyBook,
    tags: item.tags,
    url: toKebabCase(item.title),
    bookDateRange: bookDateRanges.find((b) => prophesyBook.includes(b.book)),
  } as ItemEntity;
};

@Injectable()
export class ItemsEffects {
  public getItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      map(() => itemsRows.map((row) => fillInData(row))),
      map((data) =>
        ItemsActions.loadItemsSuccess({
          item: data as ItemEntity[],
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private injector: Injector) {}
}
