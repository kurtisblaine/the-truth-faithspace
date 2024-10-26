import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on } from "@ngrx/store";
import { ItemsActions } from "./items.actions";

export const itemsFeatureKey = "items";

export interface ItemEntity {
  collectionId?: string;
  id: string | number; // Primary ID
  json: object;
  title: string;
  date: string;
}

export interface State extends EntityState<ItemEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const itemAdapter: EntityAdapter<ItemEntity> = createEntityAdapter<ItemEntity>({
  sortComparer: (a: ItemEntity, b: ItemEntity) => Number.parseInt(b.date) - Number.parseInt(a.date),
});

export const initialState: State = itemAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});
export const reducer = createReducer(
  initialState,
  on(ItemsActions.loadItems, (state) => itemAdapter.removeAll(state))
);

// export const itemsFeature = createFeature({
//   name: itemsFeatureKey,
//   reducer,
// });
