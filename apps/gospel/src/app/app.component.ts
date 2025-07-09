import { afterNextRender, Component, ElementRef, OnInit, signal, Signal, ViewChild } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { NavigationEnd, Router, RouterModule } from "@angular/router";
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
  faGears,
  faInfoCircle,
  faLink,
  faMusic,
  faNewspaper,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";

import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { DeviceDetectorService } from "ngx-device-detector";
import { BehaviorSubject, filter, fromEvent, map, Observable } from "rxjs";
import { LibFaIconComponent } from "shared";
import { SettingsWidgetComponent } from "./shared/components/settings-widget/settings-widget.component";
import { WindowService } from "./shared/service/window.service";

@Component({
  selector: "blog-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  imports: [
    MatSidenavModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    RouterModule,
    MatListModule,
    MatTooltipModule,
    MatMenuModule,
    LibFaIconComponent,
    SettingsWidgetComponent,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  @ViewChild("toTop") public toTopElement: ElementRef;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

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
  public settingsIcon = faGears;
  public arrowIcon = faArrowUp;

  public progressValue = new BehaviorSubject(0);
  public progressValue$!: Observable<number>;
  public isFullpagePage!: Signal<boolean>;
  public isMobile = signal(false);

  public scrollTimeout!: any;

  constructor(
    private router: Router,
    private windowService: WindowService,
    private deviceDetector: DeviceDetectorService
  ) {
    const isFullpagePage$ = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event: NavigationEnd) => {
        return event.urlAfterRedirects.includes("truth");
      })
    );

    this.isFullpagePage = toSignal(isFullpagePage$, { initialValue: true });

    afterNextRender(() => {
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
    });
  }

  public ngOnInit() {
    this.isMobile.set(this.deviceDetector.isMobile());
  }

  openMenu() {
    this.trigger.openMenu();
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
    this.windowService?.nativeWindow?.open("https://the-truth-from-the-beginning.web.app/", "_blank");
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
