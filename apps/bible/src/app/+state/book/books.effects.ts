import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, mergeMap, of, switchMap } from "rxjs";
import { BibleApiService } from "../bible-api.service";
import * as BooksActions from "./books.actions";

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.initBible),
      mergeMap(() => this.bibleApi.getBibles()),
      switchMap((data) =>
        of(BooksActions.loadBiblesSuccess({ bibles: data.data }))
      ),
      catchError((error) => {
        return of(BooksActions.loadBiblesFailure({ error }));
      })
    )
  );

  constructor(private bibleApi: BibleApiService) {}
}
