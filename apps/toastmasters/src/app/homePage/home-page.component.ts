import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { fadeInOut, slideInFromLeft, slideInFromRight } from "shared";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, NgOptimizedImage, MatCardModule],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  encapsulation: ViewEncapsulation.None,
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class HomePageComponent {}
