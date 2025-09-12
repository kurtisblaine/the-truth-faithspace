import { afterNextRender, Component, signal } from "@angular/core";
import { MatBadgeModule } from "@angular/material/badge";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faGears, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { DeviceDetectorService } from "ngx-device-detector";
import { SettingsWidgetComponent, ThemeSettings } from "shared";

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
    MatBadgeModule,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public title = "Flares of Glory";
  public storageName = "flaresOfGloryAppSettings";
  public isMobile = signal(true);
  public cartItemTotal = signal(0);

  public menuIcon = faBars;
  public cartIcon = faShoppingCart;
  public settingsIcon = faGears;

  constructor(private router: Router, private deviceDetector: DeviceDetectorService) {
    afterNextRender(() => {
      this.isMobile.set(this.deviceDetector.isMobile());
    });
  }

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }

  public goCart() {
    this.router.navigateByUrl("cart").then(() => {});
  }

  public goStore() {
    this.router.navigateByUrl("store").then(() => {});
  }

  public save(settings: ThemeSettings) {
    const jsonSettings = JSON.stringify({ theme: settings.theme });
    localStorage.setItem(this.storageName, jsonSettings);
  }
}
