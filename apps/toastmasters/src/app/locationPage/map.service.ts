import { afterNextRender, Injectable } from "@angular/core";
import { Map, Marker } from "leaflet";

@Injectable()
export class MapService {
  public leaflet = null;
  private map!: Map;
  private markers: Marker[];

  private readonly siouxFallsLatLong = [43.545956, -96.731285];

  constructor() {
    afterNextRender(() => {
      import("leaflet").then((leaflet) => {
        if (leaflet?.default) {
          this.leaflet = leaflet.default;
        } else {
          this.leaflet = leaflet;
        }

        this.init();
        this.changeIconDirectory();
        this.centerMap();
      });
    });
  }

  private init(id = "map") {
    const baseMapURl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    this.markers = [this.leaflet.marker(this.siouxFallsLatLong)];
    this.map = this.leaflet.map(id);
    this.leaflet.marker(this.siouxFallsLatLong).addTo(this.map);
    this.leaflet.tileLayer(baseMapURl).addTo(this.map);
  }

  private changeIconDirectory() {
    const iconRetinaUrl = "assets/marker-icon-2x.png";
    const iconUrl = "assets/marker-icon.png";
    const shadowUrl = "assets/marker-shadow.png";
    const iconDefault = this.leaflet.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41],
    });
    this.leaflet.Marker.prototype.options.icon = iconDefault;
  }

  private centerMap() {
    // Create a boundary based on the markers
    const bounds = this.leaflet.latLngBounds(this.markers.map((marker) => marker.getLatLng()));

    // Fit the map into the boundary
    this.map.fitBounds(bounds);
  }
}
