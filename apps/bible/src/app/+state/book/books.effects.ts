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
      ofType(BooksActions.initBooks),
      mergeMap(() => this.bibleApi.getBibles()),
      switchMap((data) =>
        of(BooksActions.loadBooksSuccess({ books: data.data }))
      ),
      catchError((error) => {
        return of(BooksActions.loadBooksFailure({ error }));
      })
    )
  );

  constructor(private bibleApi: BibleApiService) {}
}
