import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from "@angular/material/button";
import { StoreModule } from "@ngrx/store";
import * as fromBlog from "./state/blog/blog.reducer";
import { BlogEffects } from "./state/blog/blog.effects";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [AppComponent, ToolbarComponent],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    StoreModule.forFeature(fromBlog.BLOG_FEATURE_KEY, fromBlog.reducer),
    EffectsModule.forFeature([BlogEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
