import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, of, switchMap } from "rxjs";
import { BibleApiService } from "../bible-api.service";
import * as BiblesActions from "./bibles.actions";

@Injectable()
export class BibleEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BiblesActions.initBible),
      mergeMap(() => this.bibleApi.getBibles()),
      switchMap((data) =>
        of(BiblesActions.loadBiblesSuccess({ bibles: data.data }))
      ),
      catchError((error) => {
        return of(BiblesActions.loadBiblesFailure({ error }));
      })
    )
  );

  constructor(private bibleApi: BibleApiService) {}
}
