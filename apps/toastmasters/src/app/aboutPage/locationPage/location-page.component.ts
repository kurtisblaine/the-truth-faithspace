import { Component } from "@angular/core";
import { GoogleMapsModule } from "@angular/google-maps";

@Component({
  selector: "app-location-page",
  imports: [GoogleMapsModule],
  templateUrl: "./location-page.component.html",
  styleUrl: "./location-page.component.scss",
})
export class LocationPageComponent {
  mapOptions: google.maps.MapOptions = {
    center: { lat: 39.8282, lng: -98.5795 }, // Center of the US (example)
    zoom: 4,
    mapId: "YOUR_MAP_ID", // Optional: Recommended for performance
  };
}
