import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import {
  faBars,
  faBible,
  faBook,
  faBrain,
  faDumbbell,
  faEnvelope,
  faFile,
  faGavel,
  faInfoCircle,
  faLink,
  faMusic,
  faNewspaper,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { BehaviorSubject, Observable, fromEvent, map } from "rxjs";
import { WindowService } from "./gospel-page/window.service";

@Component({
  selector: "blog-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  @ViewChild("toTop") public toTopElement: ElementRef;

  public title = "The Good News of the Kingdom of God";
  public icon = faBars;
  public homeIcon = faInfoCircle;
  public blogIcon = faDumbbell;
  public psalmIcon = faMusic;
  public insightIcon = faBrain;
  public mailIcon = faEnvelope;
  public discernIcon = faGavel;
  public drawingIcon = faPenToSquare;
  public tractIcon = faFile;
  public resourceIcon = faLink;
  public gospelIcon = faNewspaper;
  public bookIcon = faBible;
  public studyIcon = faBook;
  public progressValue = new BehaviorSubject(0);
  public progressValue$!: Observable<number>;
  public scrollTimeout!: any;

  constructor(private router: Router, private windowService: WindowService) {}

  public ngOnInit() {
    if (this.windowService.nativeWindow) {
      this.progressValue$ = fromEvent(this.windowService.nativeWindow, "scroll", { passive: true }).pipe(
        map(() => {
          clearTimeout(this.scrollTimeout);

          this.scrollTimeout = setTimeout(function () {
            // console.log("Scroll ended");
          }, 100);

          const scrollTop = this.windowService.nativeWindow.scrollY;
          const docHeight = document.body.offsetHeight;
          const winHeight = this.windowService.nativeWindow.innerHeight;
          const scrollPercent = scrollTop / (docHeight - winHeight);
          const scrollPercentRounded = Math.round(scrollPercent * 100);
          return scrollPercentRounded;
        })
      );
    }
  }

  emitScrollEvent() {
    this.scrollToTop(this.toTopElement.nativeElement);
  }

  scrollToTop(element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  public openBible() {
    window.open("https://the-truth-from-the-beginning.web.app/", "_blank");
  }

  public goHome() {
    this.router.navigateByUrl("home").then(() => {
      this.emitScrollEvent();
    });
  }

  public goGospel() {
    this.router.navigateByUrl("truth").then(() => {
      this.emitScrollEvent();
    });
  }

  public goStudies() {
    this.router.navigateByUrl("studies").then(() => {
      this.emitScrollEvent();
    });
  }

  public goInsight() {
    this.router.navigateByUrl("insights").then(() => {
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
    this.router.navigateByUrl("edifications").then(() => {
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

  public goTracts() {
    this.router.navigateByUrl("tract").then(() => {
      this.emitScrollEvent();
    });
  }

  public goResources() {
    this.router.navigateByUrl("resource").then(() => {
      this.emitScrollEvent();
    });
  }
}
