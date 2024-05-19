import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class HomePageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
