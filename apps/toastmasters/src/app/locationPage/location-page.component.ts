import { Component, ViewEncapsulation } from "@angular/core";
import { fadeInOut } from "shared";
import { EventDetailsComponent } from "../shared/component/event-details.component";

@Component({
  selector: "app-location-page",
  imports: [EventDetailsComponent],
  templateUrl: "./location-page.component.html",
  styleUrl: "./location-page.component.scss",
  encapsulation: ViewEncapsulation.None,
  animations: [fadeInOut],
})
export class LocationPageComponent {}
