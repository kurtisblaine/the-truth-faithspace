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
import { toKebabCase } from "../state.config";
import * as PsalmActions from "./psalm.actions";
import { PsalmEntity } from "./psalm.models";

@Injectable()
export class PsalmEffects {
  public getPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.loadPsalms),
      mergeMap(() =>
        runInInjectionContext(this.injector, () => {
          const data = collection(this.database, "psalm");
          return collectionData(data, { idField: "collectionId" });
        })
      ),
      map((data) => {
        return PsalmActions.loadPsalmsSuccess({
          psalm: (data as PsalmEntity[]).map((d) => ({ ...d, url: toKebabCase(d.title) })),
        });
      })
    )
  );

  public createPsalm$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PsalmActions.createPsalm),
      mergeMap(({ psalm }) =>
        runInInjectionContext(this.injector, () => {
          const collection = doc(
            this.database,
            `psalm/${psalm.collectionId ? psalm.collectionId : psalm.id}`
          ) as DocumentReference<PsalmEntity>;
          const doc$ = from(setDoc<PsalmEntity, DocumentData>(collection, psalm));
          return doc$.pipe(mapTo(psalm));
        })
      ),
      map((document: PsalmEntity) =>
        PsalmActions.createPsalmSuccess({
          psalm: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore, private injector: Injector) {}
}
