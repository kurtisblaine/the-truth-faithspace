import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { BooksActions } from './books.actions';


@Injectable()
export class BooksEffects {

  loadBookss$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BooksActions.loadBookss),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => BooksActions.loadBookssSuccess({ data })),
          catchError(error => of(BooksActions.loadBookssFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
