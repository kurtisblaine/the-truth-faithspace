import { animate, style, transition, trigger } from "@angular/animations";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ContactFormComponent, ElementInViewportDirective } from "shared";
import { fadeInOut } from "../../../../../libs/src/lib/shared/animations/animation";
import { CarouselComponent } from "./carousel/carousel.component";

@Component({
  selector: "app-home-page",
  imports: [
    CommonModule,
    ContactFormComponent,
    MatCardModule,
    CarouselComponent,
    ElementInViewportDirective,
    NgOptimizedImage,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [
    trigger("slideInFromLeft", [
      transition(":enter", [
        style({ transform: "translateX(-100%)" }),
        animate("500ms ease-out", style({ transform: "translateX(0)" })),
      ]),
      transition(":leave", [animate("500ms ease-in", style({ transform: "translateX(-100%)" }))]),
    ]),
    trigger("slideInFromRight", [
      transition(":enter", [
        style({ transform: "translateX(100%)" }),
        animate("500ms ease-out", style({ transform: "translateX(0)" })),
      ]),
      transition(":leave", [animate("500ms ease-out", style({ transform: "translateX(-100%)" }))]),
    ]),
    fadeInOut,
  ],
})
export class HomePageComponent {
  isElementInViewport = false;

  onInViewportChange(isInViewport: boolean) {
    this.isElementInViewport = isInViewport;
  }
}
