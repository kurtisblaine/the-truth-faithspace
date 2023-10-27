import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  faBrain,
  faEnvelope,
  faEye,
  faGavel,
  faGrip,
  faHouse,
  faMusic,
} from "@fortawesome/free-solid-svg-icons";
import { fromEvent, map, of } from "rxjs";

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
  public proverbIcon = faBrain;
  public mailIcon = faEnvelope;
  public discernIcon = faGavel;
  public progressValue$ = of(0);

  constructor(private router: Router) {}

  public ngOnInit() {
    this.progressValue$ = fromEvent(window, "wheel").pipe(
      map(() => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        return scrollPercentRounded;
      })
    );
  }

  public goHome() {
    this.router.navigateByUrl("home");
  }

  public goProverb() {
    this.router.navigateByUrl("proverbs");
  }

  public goDiscern() {
    this.router.navigateByUrl("discernments");
  }

  public goBlog() {
    this.router.navigateByUrl("blogs");
  }

  public goPsalm() {
    this.router.navigateByUrl("psalms");
  }

  public goEmail() {
    this.router.navigateByUrl("email");
  }
}
