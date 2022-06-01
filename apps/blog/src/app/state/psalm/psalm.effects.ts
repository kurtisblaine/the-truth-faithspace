import { Injectable } from "@angular/core";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetch } from "@nrwl/angular";
import { map, mapTo, mergeMap, mergeMapTo, tap } from "rxjs";

import * as PsalmActions from "./psalm.actions";
import { PsalmEntity } from "./psalm.models";
import * as PsalmFeature from "./psalm.reducer";

@Injectable()
export class PsalmEffects {
  public getPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.loadPsalms),
      mapTo(collection(this.database, "psalm")),
      tap((d) => console.log(d)),
      mergeMap((data) => collectionData<PsalmEntity>(data as any)),
      tap((d) => console.log(d)),

      map((data) => PsalmActions.loadPsalmsSuccess({ psalm: data }))
    )
  );

  public createPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.createPsalm)
      // map(action => PsalmActions.createPsalmSuccess({}))
    )
  );

  constructor(
    private readonly actions$: Actions,
    private database: Firestore
  ) {}
}
