import { createEntityAdapter, EntityAdapter, EntityState, Update } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { InsightEntity } from "./insight.models";
import * as InsightActions from "./insights.actions";

export const insightsFeatureKey = "insights";

export interface State extends EntityState<InsightEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const insightAdapter: EntityAdapter<InsightEntity> = createEntityAdapter<InsightEntity>({
  selectId: (entity: InsightEntity) => entity.url,
  sortComparer: (a: InsightEntity, b: InsightEntity) => Number.parseInt(b.date) - Number.parseInt(a.date),
});

export const initialState: State = insightAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const insightReducer = createReducer(
  initialState,
  on(InsightActions.loadInsights, (state) =>
    insightAdapter.removeAll({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(InsightActions.loadInsightsSuccess, (state, { insight }) =>
    insightAdapter.setAll(insight, { ...state, loaded: true })
  ),
  on(InsightActions.loadInsightsFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(InsightActions.createInsightSuccess, (state, { insight }) => {
    if (state.ids.some((id) => id == insight.id)) {
      return insightAdapter.updateOne(
        {
          id: insight.id,
          changes: { json: insight.json },
        } as Update<InsightEntity>,
        state
      );
    } else {
      return insightAdapter.addOne(insight, state);
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return insightReducer(state, action);
}
