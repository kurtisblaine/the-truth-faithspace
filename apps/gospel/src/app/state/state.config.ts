import { Type } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { BlogEffects } from "./blog/blog.effects";
import * as fromBlog from "./blog/blog.reducer";
import { DiscernmentsEffects } from "./discern/discern.effects";
import * as fromDiscern from "./discern/discern.reducer";
import { InsightsEffects } from "./insight/insights.effects";
import * as fromInsights from "./insight/insights.reducer";
import { PsalmEffects } from "./psalm/psalm.effects";
import * as fromPsalm from "./psalm/psalm.reducer";
import { StudyEffects } from "./study/study.effects";
import * as fromStudy from "./study/study.reducer";

export interface AppState {
  [fromBlog.BLOG_FEATURE_KEY]: fromBlog.State;
  [fromPsalm.PSALM_FEATURE_KEY]: fromPsalm.State;
  [fromInsights.insightsFeatureKey]: fromInsights.State;
  [fromDiscern.DiscernmentsFeatureKey]: fromDiscern.State;
  [fromStudy.studyFeatureKey]: fromStudy.State;
}

export const reducers: ActionReducerMap<AppState> = {
  blog: fromBlog.reducer,
  psalm: fromPsalm.reducer,
  insights: fromInsights.reducer,
  discernments: fromDiscern.reducer,
  study: fromStudy.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const effects: Type<any>[] = [PsalmEffects, BlogEffects, InsightsEffects, DiscernmentsEffects, StudyEffects];
