import { StoreModule } from "@ngrx/store";
import * as fromtemplate from "./template/template.reducer";
import { templateEffects } from "./template/template.effects";
import { EffectsModule } from "@ngrx/effects";
import { NgModule } from "@angular/core";

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(
      fromtemplate.template_FEATURE_KEY,
      fromtemplate.reducer
    ),
    EffectsModule.forFeature([templateEffects]),
  ],
})
export class StateModule {}
