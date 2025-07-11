import { Injectable, Injector, runInInjectionContext } from "@angular/core";
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
      mergeMap(() =>
        runInInjectionContext(this.injector, () => {
          const data = collection(this.database, "proverb");
          return collectionData(data, { idField: "collectionId" });
        })
      ),
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
      mergeMap(({ insight }) =>
        runInInjectionContext(this.injector, () => {
          const collection = doc(
            this.database,
            `proverb/${insight.collectionId ? insight.collectionId : insight.id}`
          ) as DocumentReference<InsightEntity>;
          const doc$ = from(setDoc<InsightEntity, DocumentData>(collection, insight));
          return doc$.pipe(mapTo(insight));
        })
      ),
      map((document) =>
        InsightActions.createInsightSuccess({
          insight: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore, private injector: Injector) {}
}
