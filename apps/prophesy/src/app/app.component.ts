import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faGears } from "@fortawesome/free-solid-svg-icons";
import {
  fadeInOut,
  LinkComponent,
  SeoBaseComponent,
  SettingsWidgetComponent,
  ShareComponent,
  ThemeSettings,
} from "shared";

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
    LinkComponent,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  animations: [fadeInOut],
})
export class AppComponent extends SeoBaseComponent {
  public title = "Biblical Prophesy";
  public storageName = "ProphesyAppSettings";

  public menuIcon = faBars;
  public settingsIcon = faGears;

  constructor(private router: Router) {
    super();
  }

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }

  public goProphesies() {
    this.router.navigateByUrl("prophesies").then(() => {});
  }

  public goContact() {
    this.router.navigateByUrl("contact").then(() => {});
  }

  public save(settings: ThemeSettings) {
    const jsonSettings = JSON.stringify({ theme: settings.theme });
    localStorage.setItem(this.storageName, jsonSettings);
  }
}
