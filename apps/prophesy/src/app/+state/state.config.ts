import { isPlatformServer } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";
import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import { itemsRows } from "./items.database";
import * as fromItems from "./items/items.reducer";

export interface AppState {
  [fromItems.itemsFeatureKey]: fromItems.State;
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromItems.reducer,
};

export function storageMetaReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformServer(platformId))
      return reducer(
        {
          items: {
            entities: itemsRows.reduce<Record<string, fromItems.ItemEntity>>((acc, item) => {
              acc[item.title] = item;
              return acc;
            }, {}),
            ids: itemsRows.map((row) => row.title),
            error: "",
            loaded: true,
          } as fromItems.State,
        },
        action
      );

    // Rehydrate on init
    if (action.type === INIT) {
      const storageValue = localStorage.getItem("prophesyStoreState");
      if (storageValue) return JSON.parse(storageValue);
    }
    const nextState = reducer(state, action);
    // Persist on change
    localStorage.setItem("prophesyStoreState", JSON.stringify(nextState));
    return nextState;
  };
}

export const metaReducers: MetaReducer<AppState>[] = [storageMetaReducer];
