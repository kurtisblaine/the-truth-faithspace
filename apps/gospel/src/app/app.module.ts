import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";

import { provideHttpClient } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ScullyLibModule } from "@scullyio/ng-lib";
import { LibFaIconComponent } from "shared";
import { AppRoutingModule } from "./app.routing.module";
import { LinkComponent } from "./shared/components/link-redirect/link.component";
import { ReferenceTooltipComponent } from "./shared/components/reference-tooltip/reference-tooltip.component";
import { StateModule } from "./state/state.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatSidenavModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    LinkComponent,
    ReferenceTooltipComponent,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    StateModule,
    AppRoutingModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    LibFaIconComponent,
    ScullyLibModule.forRoot({
      alwaysMonitor: true,
    }),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
