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

import { ProverbEntity } from "./proverb.models";
import * as ProverbActions from "./proverbs.actions";
@Injectable()
export class ProverbsEffects {
  public getProverb$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProverbActions.loadProverbs),
      mapTo(collection(this.database, "proverb")),
      mergeMap((data) => collectionData(data, { idField: "collectionId" })),
      map((data) =>
        ProverbActions.loadProverbsSuccess({
          proverb: data as ProverbEntity[],
        })
      )
    )
  );

  public createProverb$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProverbActions.createProverb),
      map(({ proverb }) => ({
        collection: doc(
          this.database,
          `proverb/${proverb.collectionId ? proverb.collectionId : proverb.id}`
        ) as DocumentReference<ProverbEntity>,
        proverb,
      })),
      mergeMap(({ collection, proverb }) => {
        const doc = from(setDoc<ProverbEntity>(collection, proverb));
        return doc.pipe(mapTo(proverb));
      }),
      // mergeMap((created) => from(getDoc(created))),
      map((document) =>
        ProverbActions.createProverbSuccess({
          proverb: document,
        })
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private database: Firestore
  ) {}
}
