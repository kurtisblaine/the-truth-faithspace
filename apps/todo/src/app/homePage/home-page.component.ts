import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { SeoBaseComponent } from "shared";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent extends SeoBaseComponent {}
