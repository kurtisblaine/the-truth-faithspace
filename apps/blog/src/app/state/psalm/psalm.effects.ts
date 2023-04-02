import { Injectable } from "@angular/core";
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
  getDoc,
  updateDoc,
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
      mergeMap((data) => collectionData(data)),
      map((data) =>
        PsalmActions.loadPsalmsSuccess({
          psalm: data as PsalmEntity[],
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

  public updatePsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.updatePsalms),
      map(({ psalm }) => {
        const document = doc(
          this.database,
          `psalm`,
          psalm.id.toString()
        ) as DocumentReference<PsalmEntity>;

        return {
          doc: document,
          psalm,
        };
      }),
      mergeMap(({ doc, psalm }) => {
        const promise = from(updateDoc<PsalmEntity>(doc, psalm));
        return promise.pipe(mapTo(psalm));
      }),
      map((psalm) =>
        PsalmActions.updatePsalmSuccess({
          psalm,
        })
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private database: Firestore
  ) {}
}
