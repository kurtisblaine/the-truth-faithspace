import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
// import * as Parallax from "parallax-js";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const Parallax = require("parallax-js");
    // const scene = $(".scene").get(0);
    // const parallaxInstance = new Parallax(scene, {});
    // parallaxInstance.friction(0.2, 0.2);
  }
}
