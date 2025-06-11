import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { AppComponent } from "./app.component";

import { provideHttpClient } from "@angular/common/http";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { FirestoreModule, getFirestore, provideFirestore } from "@angular/fire/firestore";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LibFaIconComponent } from "shared";
import { AppRoutingModule } from "./app.routing.module";
import { LinkComponent } from "./shared/components/link-redirect/link.component";
import { ReferenceTooltipComponent } from "./shared/components/reference-tooltip/reference-tooltip.component";
import { StateModule } from "./state/state.module";

const firebaseConfig = {
  apiKey: "AIzaSyCjUFfiNlVcXR03aW28ZdhCdg8_lmzk15k",
  authDomain: "blog-46974.firebaseapp.com",
  databaseURL: "https://blog-46974-default-rtdb.firebaseio.com",
  projectId: "blog-46974",
  storageBucket: "blog-46974.appspot.com",
  messagingSenderId: "836636966533",
  appId: "1:836636966533:web:62c7e8bd6e9b6ac998f3ec",
  measurementId: "G-MPQSH2L8FZ",
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    MatSidenavModule,
    FirestoreModule,
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
  ],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
