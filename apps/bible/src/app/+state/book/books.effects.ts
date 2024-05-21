import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, of, switchMap } from "rxjs";
import * as BooksActions from "./books.actions";

@Injectable()
export class BooksEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksActions.initBooks),
      switchMap(() => of(BooksActions.loadBooksSuccess({ books: [] }))),
      catchError((error) => {
        console.error("Error", error);
        return of(BooksActions.loadBooksFailure({ error }));
      })
    )
  );
}
