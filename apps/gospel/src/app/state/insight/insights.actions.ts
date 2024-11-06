import { createAction, props } from "@ngrx/store";
import { InsightEntity } from "./insight.models";

export const loadInsights = createAction("[Insight/API] Load Insight");

export const loadInsightsSuccess = createAction(
  "[Insight/API] Load Insight Success",
  props<{ insight: InsightEntity[] }>()
);

export const loadInsightsFailure = createAction("[Insight/API] Load Insight Failure", props<{ error: any }>());

export const createInsight = createAction("[Insight/API] Create Insight", props<{ insight: InsightEntity }>());

export const createInsightSuccess = createAction(
  "[Insight/API] Create Insight Success",
  props<{ insight: InsightEntity }>()
);

export const createInsightFailure = createAction("[Insight/API] Create Insight Failure", props<{ error: any }>());
