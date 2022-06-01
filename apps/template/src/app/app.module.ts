import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatButtonModule } from "@angular/material/button";

import { HomePageModule } from "./home-page/home-page.module";
import { SharedModule } from "./shared/shared.module";
import { StateModule } from "./state/state.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    HomePageModule,
    SharedModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    StateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
