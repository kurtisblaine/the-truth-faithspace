import { Component, ElementRef, OnInit, Signal, ViewChild } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { NavigationEnd, Router } from "@angular/router";
import {
  faArrowUp,
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
import { BehaviorSubject, Observable, filter, fromEvent, map } from "rxjs";
import { WindowService } from "./shared/service/window.service";

@Component({
  selector: "blog-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  standalone: false,
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
  public arrowIcon = faArrowUp;

  public progressValue = new BehaviorSubject(0);
  public progressValue$!: Observable<number>;
  public isFullpagePage!: Signal<boolean>;

  public scrollTimeout!: any;

  constructor(private router: Router, private windowService: WindowService) {
    const isFullpagePage$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return event.urlAfterRedirects.includes("truth");
      })
    );

    this.isFullpagePage = toSignal(isFullpagePage$, { initialValue: true });
  }

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

  scrollToTop(element, navigate = false) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    if (navigate) {
      this.router.navigate([], {
        fragment: "gospel",
        queryParamsHandling: "merge",
        onSameUrlNavigation: "ignore",
      });
    }
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
    this.router.navigateByUrl("drawings").then(() => {
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
    this.router.navigateByUrl("poems").then(() => {
      this.emitScrollEvent();
    });
  }

  public goEmail() {
    this.router.navigateByUrl("email").then(() => {
      this.emitScrollEvent();
    });
  }

  public goTracts() {
    this.router.navigateByUrl("tracts").then(() => {
      this.emitScrollEvent();
    });
  }

  public goResources() {
    this.router.navigateByUrl("resources").then(() => {
      this.emitScrollEvent();
    });
  }
}
