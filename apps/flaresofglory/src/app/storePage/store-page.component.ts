import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";

export type Product = {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
};

@Component({
  selector: "app-store-page",
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonToggleModule, MatButtonModule, NgOptimizedImage],
  templateUrl: "./store-page.component.html",
  styleUrl: "./store-page.component.scss",
})
export class StorePageComponent {
  public products: Product[] = [];

  constructor() {
    this.products.push({
      title: "Flares of Glory | Black",
      description: "",
      image: "../../../assets/blackflares.webp",
    });
    this.products.push({
      title: "Flares of Glory | White",
      description: "",
      image: "../../../assets/whiteflares.webp",
    });
    this.products.push({
      title: "'The Holy Spirit descended like a dove'",
      description: "",
      image: "../../../assets/dovefire.webp",
    });
    this.products.push({ title: "'Nothing but the Blood'", description: "", image: "../../../assets/nothingbut.webp" });
    this.products.push({ title: "Dove", description: "", image: "../../../assets/dove.webp" });
  }
}
