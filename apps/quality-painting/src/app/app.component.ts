import { CommonModule } from "@angular/common";
import { afterNextRender, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faGears, faPhone } from "@fortawesome/free-solid-svg-icons";
import { DeviceDetectorService } from "ngx-device-detector";
import { fadeInOut, SettingsWidgetComponent, ThemeSettings } from "shared";

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
    CommonModule,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [fadeInOut],
})
export class AppComponent {
  public title = "Dave's Drywall and Painting";
  public storageName = "davesAppSettings";

  public afterFirstRender = false;
  public isMobile = false;

  public phoneIcon = faPhone;
  public settingsIcon = faGears;

  constructor(private router: Router, private deviceDetector: DeviceDetectorService) {
    afterNextRender(() => {
      this.afterFirstRender = true;
      this.isMobile = this.deviceDetector.isMobile();
    });
  }

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }

  public save(settings: ThemeSettings) {
    const jsonSettings = JSON.stringify({ theme: settings.theme });
    localStorage.setItem(this.storageName, jsonSettings);
  }
}
