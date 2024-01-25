import { NgModule, Type } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { ActionReducerMap, MetaReducer, StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../../environments/environment";
import { BlogEffects } from "./blog/blog.effects";
import * as fromBlog from "./blog/blog.reducer";
import { DiscernmentsEffects } from "./discern/discern.effects";
import * as fromDiscern from "./discern/discern.reducer";
import { ProverbsEffects } from "./proverb/proverbs.effects";
import * as fromProverbs from "./proverb/proverbs.reducer";
import { PsalmEffects } from "./psalm/psalm.effects";
import * as fromPsalm from "./psalm/psalm.reducer";

export interface AppState {
  [fromBlog.BLOG_FEATURE_KEY]: fromBlog.State;
  [fromPsalm.PSALM_FEATURE_KEY]: fromPsalm.State;
  [fromProverbs.proverbsFeatureKey]: fromProverbs.State;
  [fromDiscern.DiscernmentsFeatureKey]: fromDiscern.State;
}

export const reducers: ActionReducerMap<AppState> = {
  blog: fromBlog.reducer,
  psalm: fromPsalm.reducer,
  proverbs: fromProverbs.reducer,
  discernments: fromDiscern.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const effects: Type<any>[] = [
  PsalmEffects,
  BlogEffects,
  ProverbsEffects,
  DiscernmentsEffects,
];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
  ],
})
export class StateModule {}
