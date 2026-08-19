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
    .replace(/\s+/g, "-");

@Injectable()
export class ItemsEffects {
  public getItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      map(() =>
        itemsRows.map((row) => ({ ...row, bookDateRange: bookDateRanges.find((b) => b.book.includes(row.title)) }))
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
