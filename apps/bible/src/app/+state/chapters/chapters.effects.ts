import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, filter, mergeMap, switchMap, withLatestFrom } from "rxjs/operators";
import { BibleApiService } from "../bible-api.service";
import { ChaptersActions } from "./chapters.actions";
import { selectChaptersFetched } from "./chapters.selectors";

@Injectable()
export class ChaptersEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChaptersActions.loadChapters),
      withLatestFrom(this.store.select(selectChaptersFetched)),
      filter(([_, isLoaded]) => !isLoaded),
      mergeMap(([{ id, bookId }]) => this.bibleApi.getChapters(id, bookId)),
      switchMap((data) => of(ChaptersActions.loadChaptersSuccess({ data: data.data }))),
      catchError((error) => {
        return of(ChaptersActions.loadChaptersFailure({ error }));
      })
    )
  );

  constructor(private bibleApi: BibleApiService, private store: Store) {}
}
