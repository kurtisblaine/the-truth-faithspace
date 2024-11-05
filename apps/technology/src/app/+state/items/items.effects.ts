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
import { from, map, mergeMap } from "rxjs";

import { ItemsActions } from "./items.actions";
import { ItemEntity } from "./items.reducer";

@Injectable()
export class ItemsEffects {
  public getItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ItemsActions.loadItems),
      map(() => collection(this.database, "item")),
      mergeMap((data) => collectionData(data, { idField: "id" })),
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
      map(({ item }) => ({
        collection: doc(
          this.database,
          `item/${item.collectionId ? item.collectionId : item.id}`
        ) as DocumentReference<ItemEntity>,
        item,
      })),
      mergeMap(({ collection, item }) => {
        const doc = from(setDoc<ItemEntity, DocumentData>(collection, item));
        return doc.pipe(map(() => item));
      }),
      // mergeMap((created) => from(getDoc(created))),
      map((document) =>
        ItemsActions.createItemSuccess({
          item: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore) {}
}
