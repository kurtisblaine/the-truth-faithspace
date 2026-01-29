import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faGears } from "@fortawesome/free-solid-svg-icons";
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
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public title = "TODO";
  public storageName = "TODOAppSettings";

  public menuIcon = faBars;
  public settingsIcon = faGears;

  constructor(private router: Router) {}

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }

  public save(settings: ThemeSettings) {
    const jsonSettings = JSON.stringify({ theme: settings.theme });
    localStorage.setItem(this.storageName, jsonSettings);
  }
}
