import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createFeature, createReducer, on } from "@ngrx/store";
import { BookDateRange, Tag } from "../items.database";
import { ItemsActions } from "./items.actions";

export const itemsFeatureKey = "items";

export interface ItemEntity {
  title: string;
  tags: Tag[];
  description: string;
  prophesy: string;
  fulfillments: string[];
  url?: string;
  bookDateRange?: BookDateRange;
}

export interface State extends EntityState<ItemEntity> {
  loaded: boolean;
  error: string | null;
}

export const itemAdapter: EntityAdapter<ItemEntity> = createEntityAdapter<ItemEntity>({
  selectId: (entity: ItemEntity) => entity.title,
  sortComparer: (a: ItemEntity, b: ItemEntity) => a.title.localeCompare(b.title),
});

export const initialState: State = itemAdapter.getInitialState<State>({
  loaded: false,
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(ItemsActions.loadItems, (state) => itemAdapter.removeAll({ ...state, loaded: false })),
  on(ItemsActions.loadItemsSuccess, (state, { item }) => itemAdapter.setAll(item, { ...state, loaded: true }))
);

export const itemsFeature = createFeature({
  name: itemsFeatureKey,
  reducer: reducer,
});
