import { ViewportScroller } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";
import { fadeInOut } from "../shared/animations/animation";
// import * as Parallax from "parallax-js";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class HomePageComponent implements OnInit {
  @HostBinding("id.scrollProgress") someField = true;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    //KEEP THIS JUST IN CASE IT's NEEDED
    // const Parallax = require("parallax-js");
    // const scene = $(".scene").get(0);
    // const parallaxInstance = new Parallax(scene, {});
    // parallaxInstance.friction(0.2, 0.2);
  }

  public toAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
