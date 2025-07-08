import { NgModule, provideZonelessChangeDetection } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";

import { provideCloudinaryLoader } from "@angular/common";
import { provideHttpClient } from "@angular/common/http";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibFaIconComponent } from "shared";
import { AppRoutingModule } from "./app.routing.module";
import { FirebaseModule } from "./firebase.module";
import { SettingsWidgetComponent } from "./shared/components/settings-widget/settings-widget.component";
import { StateModule } from "./state/state.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatSidenavModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FirebaseModule,
    StateModule,
    AppRoutingModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    LibFaIconComponent,
    SettingsWidgetComponent,
  ],
  providers: [
    provideHttpClient(),
    provideZonelessChangeDetection(),
    provideCloudinaryLoader("https://res.cloudinary.com/dffihsa2y/"),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
