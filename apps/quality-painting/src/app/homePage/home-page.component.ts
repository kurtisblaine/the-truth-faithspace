import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, CarouselModule],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ["", ""],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
