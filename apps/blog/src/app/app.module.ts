import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from "./app.component";

import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import {
  FirestoreModule,
  getFirestore,
  provideFirestore,
} from "@angular/fire/firestore";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app.routing.module";
import { BlogPageModule } from "./blog-page/blog-page.module";
import { DiscernPageModule } from "./discern-page/discern-page.module";
import { DrawPageModule } from "./draw-page/draw-page.module";
import { EmailPageModule } from "./email-page/email-page.module";
import { HomePageModule } from "./home-page/home-page.module";
import { ProverbModule } from "./proverb-page/proverb.module";
import { PsalmPageModule } from "./psalm-page/psalm-page.module";
import { ServerPageModule } from "./server-page/server-page/server-page.module";
import { SharedModule } from "./shared/shared.module";
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
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    MatSidenavModule,
    FirestoreModule,
    MatProgressBarModule,
    HomePageModule,
    BrowserAnimationsModule,
    PsalmPageModule,
    ServerPageModule,
    BlogPageModule,
    SharedModule,
    BrowserModule,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    StateModule,
    AppRoutingModule,
    MatListModule,
    EmailPageModule,
    ProverbModule,
    DiscernPageModule,
    DrawPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
