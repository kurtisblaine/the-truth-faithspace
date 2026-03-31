import { Component, OnInit } from "@angular/core";
import { NarratorStyle, SeoBaseComponent } from "shared";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  standalone: false,
})
export default class HomePageComponent extends SeoBaseComponent implements OnInit {
  public narratorStyle = NarratorStyle;
  protected override keywords: string = "testimony, believe, faith, Jesus, Word, change, repentance";

  constructor() {
    super();
  }

  ngOnInit() {}
}
