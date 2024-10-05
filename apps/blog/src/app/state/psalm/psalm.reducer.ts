import { EntityAdapter, EntityState, Update, createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as PsalmActions from "./psalm.actions";
import { PsalmEntity } from "./psalm.models";

export const PSALM_FEATURE_KEY = "psalm";

export interface State extends EntityState<PsalmEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const psalmAdapter: EntityAdapter<PsalmEntity> = createEntityAdapter<PsalmEntity>({
  sortComparer: (a: PsalmEntity, b: PsalmEntity) => Number.parseInt(b.date) - Number.parseInt(a.date),
});

export const initialState: State = psalmAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const psalmReducer = createReducer(
  initialState,
  on(PsalmActions.loadPsalms, (state) =>
    psalmAdapter.removeAll({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(PsalmActions.loadPsalmsSuccess, (state, { psalm }) => psalmAdapter.setAll(psalm, { ...state, loaded: true })),
  on(PsalmActions.loadPsalmsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(PsalmActions.createPsalmSuccess, (state, { psalm }) => {
    if (state.ids.some((id) => id == psalm.id)) {
      return psalmAdapter.updateOne({ id: psalm.id, changes: { json: psalm.json } } as Update<PsalmEntity>, state);
    } else {
      return psalmAdapter.addOne(psalm, state);
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return psalmReducer(state, action);
}
