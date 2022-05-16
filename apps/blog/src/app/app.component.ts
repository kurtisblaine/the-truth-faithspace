import { Component, OnInit } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

@Component({
  selector: "blog-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "blog";
  public firebaseConfig = {
    apiKey: "AIzaSyCjUFfiNlVcXR03aW28ZdhCdg8_lmzk15k",
    authDomain: "blog-46974.firebaseapp.com",
    projectId: "blog-46974",
    storageBucket: "blog-46974.appspot.com",
    messagingSenderId: "836636966533",
    appId: "1:836636966533:web:62c7e8bd6e9b6ac998f3ec",
    measurementId: "G-MPQSH2L8FZ",
  };

  // Initialize Firebase
  public app = initializeApp(this.firebaseConfig);
  public analytics = getAnalytics(this.app);

  public ngOnInit(): void {}
}
