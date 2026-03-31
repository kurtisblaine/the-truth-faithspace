import { isPlatformServer } from "@angular/common";
import { inject, makeStateKey, PLATFORM_ID, TransferState, Type } from "@angular/core";
import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import { loadBlogs } from "./blog/blog.actions";
import { BlogEffects } from "./blog/blog.effects";
import * as fromBlog from "./blog/blog.reducer";
import { loadDiscernments } from "./discern/discern.actions";
import { DiscernmentsEffects } from "./discern/discern.effects";
import * as fromDiscern from "./discern/discern.reducer";
import { loadInsights } from "./insight/insights.actions";
import { InsightsEffects } from "./insight/insights.effects";
import * as fromInsights from "./insight/insights.reducer";
import { loadPsalms } from "./psalm/psalm.actions";
import { PsalmEffects } from "./psalm/psalm.effects";
import * as fromPsalm from "./psalm/psalm.reducer";
import { StudyActions } from "./study/study.actions";
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

export const transferStateMetaReducer = (reducer) => {
  const storeStateKey = makeStateKey<string>("storeState");

  const platformId = inject(PLATFORM_ID);
  const transferState = inject(TransferState);

  if (isPlatformServer(platformId)) {
    let lastState: any = {};
    transferState.set(storeStateKey, lastState);

    transferState.onSerialize<any>(storeStateKey, () => ({
      blog: lastState["blog"],
      psalm: lastState["psalm"],
      insights: lastState["insights"],
      discernments: lastState["discernments"],
      study: lastState["study"],
    }));

    return (state, action) => {
      lastState = reducer(state, action);
      return lastState;
    };
  } else {
    return (state, action) => {
      const next = reducer(state, action);
      if (
        action.type === StudyActions.loadStudies.type ||
        action.type === loadBlogs.type ||
        action.type === loadDiscernments.type ||
        action.type === loadPsalms.type ||
        action.type === loadInsights.type
      ) {
        const initialState = transferState.get<any>(storeStateKey, {});
        return { ...next, ...initialState };
      }
      return next;
    };
  }
};

export const toKebabCase = (value: string) => value.trim().toLowerCase().replace(/\s+/g, "-");

export const fromKebabCase = (value: string) => value.replace(/-/g, " ");

// return spacedValue.replace(/\b\w/g, (s) => s.toUpperCase());

// const convertItemsToKebabCase = (items: any[]) => items.map((item) => ({ ...item, url: toKebabCase(item.title) }));

// export function titleTransformerMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
//   return (state, action) => {
//     debugger;
//     switch (action.type) {
//       case StudyActions.loadStudiesSuccess.type:
//         const studiesAction = action as ReturnType<typeof StudyActions.loadStudiesSuccess>;
//         studiesAction.study = convertItemsToKebabCase(studiesAction?.study);
//         return reducer(state, studiesAction);
//       case loadBlogsSuccess.type:
//         const blogActions = action as ReturnType<typeof loadBlogsSuccess>;
//         blogActions.blog = convertItemsToKebabCase(blogActions.blog);
//         return reducer(state, blogActions);
//       case loadDiscernmentsSuccess.type:
//         const discernmentActions = action as ReturnType<typeof loadDiscernmentsSuccess>;
//         discernmentActions.discern = convertItemsToKebabCase(discernmentActions.discern);
//         return reducer(state, discernmentActions);
//       case loadPsalmsSuccess.type:
//         const psalmAction = action as ReturnType<typeof loadPsalmsSuccess>;
//         psalmAction.psalm = convertItemsToKebabCase(psalmAction.psalm);
//         return reducer(state, psalmAction);
//       case loadInsightsSuccess.type:
//         const insightAction = action as ReturnType<typeof loadInsightsSuccess>;
//         insightAction.insight = convertItemsToKebabCase(insightAction.insight);
//         return reducer(state, insightAction);
//       default:
//         return reducer(state, action);
//     }
//   };
// }

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [transferStateMetaReducer]
  : [transferStateMetaReducer];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const effects: Type<any>[] = [PsalmEffects, BlogEffects, InsightsEffects, DiscernmentsEffects, StudyEffects];
