import { ActionReducerMap, MetaReducer, StoreModule } from "@ngrx/store";
import * as fromBlog from "./blog/blog.reducer";
import { BlogEffects } from "./blog/blog.effects";
import * as fromPsalm from "./psalm/psalm.reducer";
import { PsalmEffects } from "./psalm/psalm.effects";
import { EffectsModule } from "@ngrx/effects";
import { NgModule, Type } from "@angular/core";
import { environment } from "../../environments/environment";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

export interface AppState {
  [fromBlog.BLOG_FEATURE_KEY]: fromBlog.State;
  [fromPsalm.PSALM_FEATURE_KEY]: fromPsalm.State;
}

export const reducers: ActionReducerMap<AppState> = {
  blog: fromBlog.reducer,
  psalm: fromPsalm.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];

export const effects: Type<any>[] = [PsalmEffects, BlogEffects];

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument(),
  ],
})
export class StateModule {}
