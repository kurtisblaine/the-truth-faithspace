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
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { BehaviorSubject, Observable, fromEvent, map } from "rxjs";

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
  public drawingIcon = faPenToSquare;
  public progressValue = new BehaviorSubject(0);
  public progressValue$!: Observable<number>;
  public scrollTimeout: number | undefined;

  constructor(private router: Router) {}

  public ngOnInit() {
    this.progressValue$ = fromEvent(window, "scroll").pipe(
      map(() => {
        clearTimeout(this.scrollTimeout);

        this.scrollTimeout = setTimeout(function () {
          console.log("Scroll ended");
        }, 100);

        const scrollTop = window.scrollY;
        const docHeight = document.body.offsetHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);
        return scrollPercentRounded;
      })
    );
  }

  emitScrollEvent() {
    window.dispatchEvent(new CustomEvent("scroll", { detail: { scrollY: 0 } }));
  }

  scrollToTop(element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  public goHome() {
    this.router.navigateByUrl("home").then(() => {
      this.emitScrollEvent();
    });
  }

  public goProverb() {
    this.router.navigateByUrl("proverbs").then(() => {
      this.emitScrollEvent();
    });
  }

  public goDrawings() {
    this.router.navigateByUrl("drawing").then(() => {
      this.emitScrollEvent();
    });
  }

  public goDiscern() {
    this.router.navigateByUrl("discernments").then(() => {
      this.emitScrollEvent();
    });
  }

  public goBlog() {
    this.router.navigateByUrl("blogs").then(() => {
      this.emitScrollEvent();
    });
  }

  public goPsalm() {
    this.router.navigateByUrl("psalms").then(() => {
      this.emitScrollEvent();
    });
  }

  public goEmail() {
    this.router.navigateByUrl("email").then(() => {
      this.emitScrollEvent();
    });
  }
}
