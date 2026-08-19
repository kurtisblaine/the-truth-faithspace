import { isPlatformServer } from "@angular/common";
import { inject, PLATFORM_ID } from "@angular/core";
import { ActionReducer, ActionReducerMap, INIT, MetaReducer } from "@ngrx/store";
import * as fromItems from "./items/items.reducer";

export interface AppState {
  [fromItems.itemsFeatureKey]: fromItems.State;
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromItems.reducer,
};

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformServer(platformId)) return reducer(state, action);

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
