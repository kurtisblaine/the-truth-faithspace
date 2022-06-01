import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: "template-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "template";

  //TODO: THIS NEEDS CHANGING
  public firebaseConfig = {
    apiKey: "AIzaSyCjUFfiNlVcXR03aW28ZdhCdg8_lmzk15k",
    authDomain: "template-46974.firebaseapp.com",
    projectId: "template-46974",
    storageBucket: "template-46974.appspot.com",
    messagingSenderId: "836636966533",
    appId: "1:836636966533:web:62c7e8bd6e9b6ac998f3ec",
    measurementId: "G-MPQSH2L8FZ",
  };

  // Initialize Firebase
  public app = initializeApp(this.firebaseConfig);
  public analytics = getAnalytics(this.app);

  public ngOnInit() {}
}
