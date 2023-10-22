import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as DiscernActions from "./discern.actions";
import { DiscernEntity } from "./discern.models";

export const DiscernmentsFeatureKey = "discernments";

export interface State extends EntityState<DiscernEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const discernAdapter: EntityAdapter<DiscernEntity> =
  createEntityAdapter<DiscernEntity>({
    sortComparer: (a: DiscernEntity, b: DiscernEntity) =>
      Number.parseInt(b.date) - Number.parseInt(a.date),
  });

export const initialState: State = discernAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const discernReducer = createReducer(
  initialState,
  on(DiscernActions.loadDiscernments, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(DiscernActions.loadDiscernmentsSuccess, (state, { discern }) =>
    discernAdapter.setAll(discern, { ...state, loaded: true })
  ),
  on(DiscernActions.loadDiscernmentsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(DiscernActions.createDiscernmentsuccess, (state, { discern }) => {
    if (state.ids.some((id) => id == discern.id)) {
      return discernAdapter.updateOne(
        {
          id: discern.id,
          changes: { json: discern.json },
        } as Update<DiscernEntity>,
        state
      );
    } else {
      return discernAdapter.addOne(discern, state);
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return discernReducer(state, action);
}
