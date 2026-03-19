import { NgOptimizedImage } from "@angular/common";
import { afterNextRender, Component, OnDestroy, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { NavigationEnd, Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faCaretDown, faEnvelope, faGears, faPhone } from "@fortawesome/free-solid-svg-icons";
import { DeviceDetectorService } from "ngx-device-detector";
import { filter, Subscription } from "rxjs";
import { AuthSettingsComponent, SettingsWidgetComponent, ShareComponent, ThemeSettings } from "shared";

@Component({
  imports: [
    RouterModule,
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatListModule,
    MatTooltipModule,
    SettingsWidgetComponent,
    AuthSettingsComponent,
    MatMenuModule,
    ShareComponent,
    NgOptimizedImage,
    MatDividerModule,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnDestroy {
  public title = "Toastmasters";
  public storageName = "ToastMastersAppSettings";

  public menuIcon = faBars;
  public settingsIcon = faGears;
  public phoneIcon = faPhone;
  public emailIcon = faEnvelope;
  public downArrowIcon = faCaretDown;

  public isMobile = signal(false);
  private subscription: Subscription;

  constructor(private router: Router, private deviceDetector: DeviceDetectorService) {
    afterNextRender(() => {
      this.isMobile.set(this.deviceDetector.isMobile());

      this.subscription = this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
        window.document.body.scrollTo(0, 0);
      });
    });
  }

  public ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  navigateToServer() {
    this.router.navigateByUrl("server");
  }

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }

  public goLocation() {
    this.router.navigateByUrl("about/location").then(() => {});
  }

  public goMembership() {
    this.router.navigateByUrl("about/membership").then(() => {});
  }

  public goContact() {
    this.router.navigateByUrl("contact").then(() => {});
  }

  public goBlog() {
    this.router.navigateByUrl("blogs").then(() => {});
  }

  public save(settings: ThemeSettings) {
    const jsonSettings = JSON.stringify({ theme: settings.theme });
    localStorage.setItem(this.storageName, jsonSettings);
  }
}
