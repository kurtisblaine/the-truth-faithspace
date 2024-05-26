import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, mergeMap, switchMap } from "rxjs/operators";
import { BibleApiService } from "../bible-api.service";
import { ChaptersActions } from "./chapters.actions";

@Injectable()
export class ChaptersEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChaptersActions.loadChapters),
      mergeMap(({ id, bookId }) => this.bibleApi.getChapters(id, bookId)),
      switchMap((data) =>
        of(ChaptersActions.loadChaptersSuccess({ data: data.data }))
      ),
      catchError((error) => {
        return of(ChaptersActions.loadChaptersFailure({ error }));
      })
    )
  );

  constructor(private bibleApi: BibleApiService) {}
}
