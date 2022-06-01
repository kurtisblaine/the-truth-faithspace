import { StoreModule } from "@ngrx/store";
import * as fromBlog from "./blog/blog.reducer";
import { BlogEffects } from "./blog/blog.effects";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(fromBlog.BLOG_FEATURE_KEY, fromBlog.reducer),
    EffectsModule.forFeature([BlogEffects]),
  ],
})
export class StateModule {}
