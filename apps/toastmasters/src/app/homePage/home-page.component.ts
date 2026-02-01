import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { fadeInOut, slideInFromLeft, slideInFromRight } from "shared";
import { EventDetailsComponent } from "../shared/component/event-details.component";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, NgOptimizedImage, EventDetailsComponent],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  encapsulation: ViewEncapsulation.None,
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class HomePageComponent {}
