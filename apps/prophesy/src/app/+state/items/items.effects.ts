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

@Injectable()
export class ItemsEffects {
  public getItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      map(() =>
        itemsRows.map((row) => {
          const prophesyBook = row.prophesy.match(/\(([^)]+)\)/) ?? ["", ""];
          return {
            ...row,
            book: prophesyBook[1],
            bookDateRange: bookDateRanges.find((b) => prophesyBook[1].includes(b.book)),
          };
        })
      ),
      map((data) =>
        ItemsActions.loadItemsSuccess({
          item: (data as ItemEntity[]).map((d) => ({ ...d, url: toKebabCase(d.title) })),
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private injector: Injector) {}
}
