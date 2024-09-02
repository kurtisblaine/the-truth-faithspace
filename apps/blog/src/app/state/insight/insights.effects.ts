import { Injectable } from "@angular/core";
import {
  collection,
  collectionData,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  setDoc,
} from "@angular/fire/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, map, mapTo, mergeMap } from "rxjs";

import { InsightEntity } from "./insight.models";
import * as InsightActions from "./insights.actions";
@Injectable()
export class InsightsEffects {
  public getInsight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InsightActions.loadInsights),
      mapTo(collection(this.database, "proverb")),
      mergeMap((data) => collectionData(data, { idField: "collectionId" })),
      map((data) =>
        InsightActions.loadInsightsSuccess({
          insight: data as InsightEntity[],
        })
      )
    )
  );

  public createInsight$ = createEffect(() =>
    this.actions$.pipe(
      ofType(InsightActions.createInsight),
      map(({ insight }) => ({
        collection: doc(
          this.database,
          `proverb/${insight.collectionId ? insight.collectionId : insight.id}`
        ) as DocumentReference<InsightEntity>,
        insight,
      })),
      mergeMap(({ collection, insight }) => {
        const doc = from(setDoc<InsightEntity, DocumentData>(collection, insight));
        return doc.pipe(mapTo(insight));
      }),
      // mergeMap((created) => from(getDoc(created))),
      map((document) =>
        InsightActions.createInsightSuccess({
          insight: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore) {}
}
