import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Map, Marker } from "leaflet";

@Injectable()
export class MapService {
  public leaflet = null;
  private map!: Map;
  private markers: Marker[];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      import("leaflet").then((leaflet) => {
        this.leaflet = leaflet;
        this.init();
        this.centerMap();
      });
    }
  }

  private init(id = "map") {
    const baseMapURl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    this.markers = [this.leaflet.marker([43.545956, -96.731285])];
    this.map = this.leaflet.map(id);
    this.leaflet.tileLayer(baseMapURl).addTo(this.map);
  }

  private centerMap() {
    // Create a boundary based on the markers
    const bounds = this.leaflet.latLngBounds(this.markers.map((marker) => marker.getLatLng()));

    // Fit the map into the boundary
    this.map.fitBounds(bounds);
  }
}
