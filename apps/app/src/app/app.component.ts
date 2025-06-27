import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterModule, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faHome } from "@fortawesome/free-solid-svg-icons";

@Component({
  imports: [
    RouterModule,
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
  ],
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public title = "App";
  public homeIcon = faHome;
  public menuIcon = faBars;

  constructor(private router: Router) {}

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }
}
