import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ContactFormComponent, fadeInOut, slideInFromLeft, slideInFromRight } from "shared";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, ContactFormComponent, MatCardModule, CarouselComponent, NgOptimizedImage],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class HomePageComponent {
  isElementInViewport = false;

  onInViewportChange(isInViewport: boolean) {
    this.isElementInViewport = isInViewport;
  }
}
