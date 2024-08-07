/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { BibleApiService } from "../bible-api.service";
import { BooksActions } from "./books.actions";
import { selectAllBooks } from "./books.selectors";

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

  select$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.selectBook),
      withLatestFrom(this.store.select(selectAllBooks)),
      filter(([_, books]) => !books.length),
      switchMap(([action]) => of(BooksActions.loadBooks({ id: action.id })))
    )
  );

  constructor(private bibleApi: BibleApiService, private store: Store) {}
}
