import { afterNextRender, Component, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faEnvelope, faGears, faPhone } from "@fortawesome/free-solid-svg-icons";
import { DeviceDetectorService } from "ngx-device-detector";
import { SettingsWidgetComponent, ShareComponent, ThemeSettings } from "shared";

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
    MatMenuModule,
    ShareComponent,
    MatDividerModule,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public title = "Toastmasters";
  public storageName = "ToastMastersAppSettings";

  public menuIcon = faBars;
  public settingsIcon = faGears;
  public phoneIcon = faPhone;
  public emailIcon = faEnvelope;

  public isMobile = signal(false);

  constructor(private router: Router, private deviceDetector: DeviceDetectorService) {
    afterNextRender(() => {
      this.isMobile.set(this.deviceDetector.isMobile());
    });
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
