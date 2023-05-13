import { Injectable } from "@angular/core";
import {
  collection,
  collectionData,
  doc,
  DocumentReference,
  Firestore,
  setDoc,
} from "@angular/fire/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, map, mapTo, mergeMap } from "rxjs";

import * as PsalmActions from "./psalm.actions";
import { PsalmEntity } from "./psalm.models";

@Injectable()
export class PsalmEffects {
  public getPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.loadPsalms),
      mapTo(collection(this.database, "psalm")),
      mergeMap((data) => collectionData(data, { idField: "collectionId" })),
      map((data) => {
        return PsalmActions.loadPsalmsSuccess({
          psalm: data as PsalmEntity[],
        });
      })
    )
  );

  public createPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.createPsalm),
      map(({ psalm }) => {
        return {
          collection: doc(
            this.database,
            `psalm/${psalm.collectionId ? psalm.collectionId : psalm.id}`
          ) as DocumentReference<PsalmEntity>,
          psalm,
        };
      }),
      mergeMap(({ collection, psalm }) => {
        const doc = from(setDoc<PsalmEntity>(collection, psalm));
        return doc.pipe(mapTo(psalm));
      }),
      // mergeMap((created) => from(getDoc(created))),
      map((document) =>
        PsalmActions.createPsalmSuccess({
          psalm: document,
        })
      )
    )
  );

  // public reload$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(PsalmActions.createPsalmSuccess),
  //     map(() => PsalmActions.loadPsalms())
  //   )
  // );

  constructor(
    private readonly actions$: Actions,
    private database: Firestore
  ) {}
}
