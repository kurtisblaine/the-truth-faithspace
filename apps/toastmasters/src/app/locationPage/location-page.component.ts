import { AfterViewInit, Component } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { fadeInOut, slideInFromLeft, slideInFromRight } from "shared";
import { EventDetailsComponent } from "../shared/component/event-details/event-details.component";
import { MapService } from "./map.service";

@Component({
  selector: "app-location-page",
  imports: [EventDetailsComponent, MatDividerModule],
  templateUrl: "./location-page.component.html",
  styleUrl: "./location-page.component.scss",
  animations: [fadeInOut, slideInFromLeft, slideInFromRight],
  providers: [MapService],
})
export class LocationPageComponent implements AfterViewInit {
  constructor(private mapService: MapService) {}

  ngOnInit() {}

  ngAfterViewInit() {}
}
