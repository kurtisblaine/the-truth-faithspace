import { Injectable, Injector, runInInjectionContext } from "@angular/core";
import {
  collection,
  collectionData,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  setDoc,
} from "@angular/fire/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, map, mergeMap } from "rxjs";

import { ItemsActions } from "./items.actions";
import { ItemEntity } from "./items.reducer";

@Injectable()
export class ItemsEffects {
  public getItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      mergeMap(() =>
        runInInjectionContext(this.injector, () => {
          const data = collection(this.database, "item");
          return collectionData(data, { idField: "id" });
        })
      ),
      map((data) =>
        ItemsActions.loadItemsSuccess({
          item: data as ItemEntity[],
        })
      )
    )
  );

  public createItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.createItem),
      mergeMap(({ item }) =>
        runInInjectionContext(this.injector, () => {
          const collection = doc(
            this.database,
            `item/${item.collectionId ? item.collectionId : item.id}`
          ) as DocumentReference<ItemEntity>;
          const doc$ = from(setDoc<ItemEntity, DocumentData>(collection, item));
          return doc$.pipe(map(() => item));
        })
      ),
      map((document) =>
        ItemsActions.createItemSuccess({
          item: document,
        })
      )
    )
  );

  public deleteItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.deleteItem),
      mergeMap(({ item }) =>
        runInInjectionContext(this.injector, () => {
          const collection = doc(
            this.database,
            `item/${item.collectionId ? item.collectionId : item.id}`
          ) as DocumentReference<ItemEntity>;
          const doc$ = from(deleteDoc<ItemEntity, DocumentData>(collection));
          return doc$.pipe(map(() => item));
        })
      ),
      map((document) =>
        ItemsActions.deleteItemSuccess({
          item: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore, private injector: Injector) {}
}
