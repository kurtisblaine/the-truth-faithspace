import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {}
