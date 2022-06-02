import { Injectable } from "@angular/core";
import {
  collection,
  collectionData,
  Firestore,
  addDoc,
  CollectionReference,
  getDoc,
} from "@angular/fire/firestore";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { from, map, mapTo, mergeMap, mergeMapTo, tap } from "rxjs";
import { Guid } from "guid-typescript";

import * as PsalmActions from "./psalm.actions";
import { PsalmEntity } from "./psalm.models";
import * as PsalmFeature from "./psalm.reducer";

@Injectable()
export class PsalmEffects {
  public getPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.loadPsalms),
      mapTo(collection(this.database, "psalm")),
      mergeMap((data) => collectionData(data)),
      map((data) =>
        PsalmActions.loadPsalmsSuccess({
          psalm: data.map((d) => ({
            id: Guid.create().toString(),
            json: d,
          })) as PsalmEntity[],
        })
      )
    )
  );

  public createPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.createPsalm),
      map(({ psalm }) => ({
        collection: collection(
          this.database,
          "psalm"
        ) as CollectionReference<PsalmEntity>,
        psalm,
      })),
      mergeMap(({ collection, psalm }) =>
        from(addDoc<PsalmEntity>(collection, psalm))
      ),
      mergeMap((created) => from(getDoc(created))),
      map((document) =>
        PsalmActions.createPsalmSuccess({
          psalm: document.data() as PsalmEntity,
        })
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private database: Firestore
  ) {}
}
