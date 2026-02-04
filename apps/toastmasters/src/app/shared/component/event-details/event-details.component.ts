import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faCalendar, faClock, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { fadeInOut, slideInFromLeft, slideInFromRight } from "shared";

@Component({
  selector: "app-event-details",
  imports: [FontAwesomeModule, MatRippleModule, CommonModule, MatButtonModule],
  templateUrl: "./event-details.component.html",
  styleUrl: "./event-details.component.scss",
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class EventDetailsComponent {
  public locationIcon = faLocationPin;
  public timeIcon = faClock;
  public calendarIcon = faCalendar;

  constructor(private router: Router) {}

  public navigateToLocationPage() {
    this.router.navigateByUrl("/about/location");
  }
}
