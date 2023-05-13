import {
  createEntityAdapter,
  EntityAdapter,
  EntityState,
  Update,
} from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { ProverbEntity } from "./proverb.models";
import * as ProverbActions from "./proverbs.actions";

export const proverbsFeatureKey = "proverbs";

export interface State extends EntityState<ProverbEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const proverbAdapter: EntityAdapter<ProverbEntity> =
  createEntityAdapter<ProverbEntity>({
    sortComparer: (a: ProverbEntity, b: ProverbEntity) =>
      Number.parseInt(b.date) - Number.parseInt(a.date),
  });

export const initialState: State = proverbAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const proverbReducer = createReducer(
  initialState,
  on(ProverbActions.loadProverbs, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ProverbActions.loadProverbsSuccess, (state, { proverb }) =>
    proverbAdapter.setAll(proverb, { ...state, loaded: true })
  ),
  on(ProverbActions.loadProverbsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(ProverbActions.createProverbSuccess, (state, { proverb }) => {
    if (state.ids.some((id) => id == proverb.id)) {
      return proverbAdapter.updateOne(
        {
          id: proverb.id,
          changes: { json: proverb.json },
        } as Update<ProverbEntity>,
        state
      );
    } else {
      return proverbAdapter.addOne(proverb, state);
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return proverbReducer(state, action);
}
