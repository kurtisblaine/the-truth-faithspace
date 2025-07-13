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

import * as DiscernActions from "./discern.actions";
import { DiscernEntity } from "./discern.models";

@Injectable()
export class DiscernmentsEffects {
  public getDiscern$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DiscernActions.loadDiscernments),
      mergeMap(() =>
        runInInjectionContext(this.injector, () => {
          const data = collection(this.database, "discern");
          return collectionData(data, { idField: "collectionId" });
        })
      ),
      map((data) =>
        DiscernActions.loadDiscernmentsSuccess({
          discern: data as DiscernEntity[],
        })
      )
    )
  );

  public createDiscern$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DiscernActions.createDiscern),
      mergeMap(({ discern }) =>
        runInInjectionContext(this.injector, () => {
          const collection = doc(
            this.database,
            `discern/${discern.collectionId ? discern.collectionId : discern.id}`
          ) as DocumentReference<DiscernEntity>;
          const doc$ = from(setDoc<DiscernEntity, DocumentData>(collection, discern));
          return doc$.pipe(mapTo(discern));
        })
      ),
      map((document) =>
        DiscernActions.createDiscernmentsuccess({
          discern: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore, private injector: Injector) {}
}
