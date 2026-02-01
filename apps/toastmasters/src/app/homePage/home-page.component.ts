import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCalendar, faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { fadeInOut, slideInFromLeft, slideInFromRight } from "shared";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, NgOptimizedImage, MatCardModule, MatButtonModule, FontAwesomeModule, MatRippleModule],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  encapsulation: ViewEncapsulation.None,
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class HomePageComponent {
  public locationIcon = faLocationPin;
  public timeIcon = faClock;
  public calendarIcon = faCalendar;

  constructor(private router: Router) {}

  public navigateToLocationPage() {
    this.router.navigateByUrl("/about/location");
  }
}
