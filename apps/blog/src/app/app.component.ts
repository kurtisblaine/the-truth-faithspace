import { Component, OnInit } from "@angular/core";
import {
  faEye,
  faGrip,
  faHouse,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";

@Component({
  selector: "blog-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  public title = "The Good News of The Kingdom of God";
  public icon = faGrip;
  public homeIcon = faHouse;
  public blogIcon = faEye;
  public psalmIcon = faMusic;

  constructor(private router: Router) {}

  public ngOnInit() {}

  public goHome() {
    this.router.navigateByUrl("home");
  }

  public goBlog() {
    this.router.navigateByUrl("blogs");
  }

  public goPsalm() {
    this.router.navigateByUrl("psalms");
  }
}
