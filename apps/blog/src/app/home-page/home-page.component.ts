import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { fadeInOut } from "../shared/animations/animation";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export default class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
