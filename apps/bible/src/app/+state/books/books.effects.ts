/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, mergeMap, switchMap } from "rxjs/operators";
import { BibleApiService } from "../bible-api.service";
import { BooksActions } from "./books.actions";

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.loadBooks),
      mergeMap(({ id }) => this.bibleApi.getBooks(id)),
      switchMap((data) => of(BooksActions.loadBooksSuccess({ data: data.data }))),
      catchError((error) => {
        return of(BooksActions.loadBooksFailure({ error }));
      })
    )
  );

  constructor(private bibleApi: BibleApiService, private store: Store) {}
}
