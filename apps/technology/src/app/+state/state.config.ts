import { isPlatformServer } from "@angular/common";
import { inject, makeStateKey, PLATFORM_ID, TransferState } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { ItemsActions } from "./items/items.actions";
import * as fromItems from "./items/items.reducer";

export const transferStateMetaReducer = (reducer) => {
  const storeStateKey = makeStateKey<string>("storeState");

  const platformId = inject(PLATFORM_ID);
  const transferState = inject(TransferState);

  if (isPlatformServer(platformId)) {
    let lastState: any = {};
    transferState.set(storeStateKey, lastState);

    transferState.onSerialize<any>(storeStateKey, () => ({
      items: lastState["items"],
    }));

    return (state, action) => {
      lastState = reducer(state, action);
      return lastState;
    };
  } else {
    return (state, action) => {
      const next = reducer(state, action);
      if (action.type === ItemsActions.loadItems.type) {
        const initialState = transferState.get<any>(storeStateKey, {});
        return { ...next, ...initialState };
      }
      return next;
    };
  }
};

export interface AppState {
  [fromItems.itemsFeatureKey]: fromItems.State;
}

export const reducers: ActionReducerMap<AppState> = {
  items: fromItems.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [transferStateMetaReducer]
  : [transferStateMetaReducer];
