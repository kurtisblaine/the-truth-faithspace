import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { catchError, filter, mergeMap, of, switchMap, withLatestFrom } from "rxjs";
import { BibleApiService } from "../bible-api.service";
import * as BiblesActions from "./bibles.actions";
import { selectBiblesFetched } from "./bibles.selectors";

@Injectable()
export class BibleEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BiblesActions.initBible),
      withLatestFrom(this.store.select(selectBiblesFetched)),
      filter(([_, isLoaded]) => !isLoaded),
      mergeMap(() => this.bibleApi.getBibles()),
      switchMap((data) => of(BiblesActions.loadBiblesSuccess({ bibles: data.data }))),
      catchError((error) => {
        return of(BiblesActions.loadBiblesFailure({ error }));
      })
    )
  );

  constructor(private bibleApi: BibleApiService, private store: Store) {}
}
