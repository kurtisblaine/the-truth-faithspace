import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeature, createReducer, on } from "@ngrx/store";
import { ItemsActions } from "./items.actions";

export const itemsFeatureKey = "items";

export interface ItemEntity {
  collectionId?: string;
  id: string | number; // Primary ID
  json: object | string;
  title: string;
  date: string;
}

export interface State extends EntityState<ItemEntity> {
  id: string;
  loaded: boolean;
  error: string | null;
}

export const itemAdapter: EntityAdapter<ItemEntity> = createEntityAdapter<ItemEntity>({
  sortComparer: (a: ItemEntity, b: ItemEntity) => Number.parseInt(b.date) - Number.parseInt(a.date),
});

export const initialState: State = itemAdapter.getInitialState<State>({
  loaded: false,
  error: null,
  id: "",
});

export const reducer = createReducer(
  initialState,
  on(ItemsActions.loadItems, (state) => itemAdapter.removeAll({ ...state, loaded: false })),
  on(ItemsActions.loadItemsSuccess, (state, { item }) => itemAdapter.setAll(item, { ...state, loaded: true })),
  on(ItemsActions.createItem, (state) => state),
  on(ItemsActions.createItemSuccess, (state, { item }) => itemAdapter.setOne(item, state))
);

export const itemsFeature = createFeature({
  name: itemsFeatureKey,
  reducer: reducer,
});
