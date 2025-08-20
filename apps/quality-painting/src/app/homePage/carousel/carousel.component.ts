import { CommonModule, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { fadeInOut } from "shared";

@Component({
  selector: "app-carousel",
  imports: [CommonModule, NgOptimizedImage, CarouselModule],
  templateUrl: "./carousel.component.html",
  styleUrl: "./carousel.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class CarouselComponent {
  public customOptions: OwlOptions = {
    loop: true,
    dots: true,
    navSpeed: 700,
    merge: true,
    autoplay: true,
    autoplaySpeed: 2500,
    margin: 5,
    lazyLoad: true,
    autoHeight: true,
    dotsData: false,
    items: 4,
  };
}
