import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { ContactFormComponent } from "shared";

@Component({
  selector: "app-home-page",
  imports: [CommonModule, CarouselModule, ContactFormComponent, MatCardModule, NgOptimizedImage],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
})
export class HomePageComponent {
  public customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 2500,
    margin: 10,
    lazyLoad: true,
    autoHeight: true,
    autoWidth: true,
    dotsData: false,
  };
}
