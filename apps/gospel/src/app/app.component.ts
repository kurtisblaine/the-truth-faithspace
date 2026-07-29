import { afterNextRender, Component, ElementRef, inject, OnInit, signal, ViewChild } from "@angular/core";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { Router, RouterModule } from "@angular/router";
import {
  faArrowUp,
  faBars,
  faBible,
  faBook,
  faBookmark,
  faBrain,
  faDumbbell,
  faEnvelope,
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
import { BehaviorSubject, fromEvent, map, Observable } from "rxjs";
import {
  AuthSettingsComponent,
  fadeInOut,
  LibFaIconComponent,
  LinkComponent,
  SeoBaseComponent,
  SettingsWidgetComponent,
  VoiceSettingsComponent,
} from "shared";
@Component({
  selector: "blog-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [fadeInOut],
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
    VoiceSettingsComponent,
    AuthSettingsComponent,
    CommonModule,
    LinkComponent,
  ],
})
export class AppComponent extends SeoBaseComponent implements OnInit {
  @ViewChild("toTop") public toTopElement: ElementRef;
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  public icon = faBars;
  public blogIcon = faDumbbell;
  public psalmIcon = faMusic;
  public insightIcon = faBrain;
  public mailIcon = faEnvelope;
  public homeIcon = faInfoCircle;
  public discernIcon = faGavel;
  public drawingIcon = faPenToSquare;
  public tractsIcon = faBookmark;
  public resourceIcon = faLink;
  public gospelIcon = faNewspaper;
  public bookIcon = faBible;
  public studyIcon = faBook;
  public settingsIcon = faGears;
  public arrowIcon = faArrowUp;

  public progressValue = new BehaviorSubject(0);
  public progressValue$!: Observable<number>;

  deviceDetector = inject(DeviceDetectorService);
  public isMobile = signal(true);

  public scrollTimeout!: any;

  constructor(private router: Router) {
    super();

    afterNextRender(() => {
      this.isMobile.set(this.deviceDetector.isMobile());

      this.progressValue$ = fromEvent(window, "scroll", { passive: true }).pipe(
        map(() => {
          clearTimeout(this.scrollTimeout);

          this.scrollTimeout = setTimeout(function () {
            // console.log("Scroll ended");
          }, 100);

          const scrollTop = window.scrollY;
          const docHeight = document.body.offsetHeight;
          const winHeight = window.innerHeight;
          const scrollPercent = scrollTop / (docHeight - winHeight);
          const scrollPercentRounded = Math.round(scrollPercent * 100);
          return scrollPercentRounded;
        })
      );
    });
  }

  public ngOnInit() {}

  navigateToServer() {
    this.router.navigateByUrl("server");
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
}
