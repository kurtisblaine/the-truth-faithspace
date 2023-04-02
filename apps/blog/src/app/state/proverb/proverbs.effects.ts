import { Injectable } from "@angular/core";
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  getDoc,
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
      mergeMap((data) => collectionData(data)),
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
        collection: collection(
          this.database,
          "proverb"
        ) as CollectionReference<ProverbEntity>,
        proverb,
      })),
      mergeMap(({ collection, proverb }) =>
        from(addDoc<ProverbEntity>(collection, proverb))
      ),
      mergeMap((created) => from(getDoc(created))),
      map((document) =>
        ProverbActions.createProverbSuccess({
          proverb: document.data() as ProverbEntity,
        })
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private database: Firestore
  ) {}
}
