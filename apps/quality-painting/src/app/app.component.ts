import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faGears, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { SettingsWidgetComponent } from "./shared/component/settings-widget.component";

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
  public title = "Dave's Quality Painting";

  public icon = faPaintBrush;
  public settingsIcon = faGears;

  constructor(private router: Router) {}

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }
}
