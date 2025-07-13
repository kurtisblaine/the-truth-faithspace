import { Component, OnInit } from "@angular/core";
import { NarratorStyle } from "../../../../../libs/src/lib/shared/components/narrator/narrator.component";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  standalone: false,
})
export default class HomePageComponent extends SeoBaseComponent implements OnInit {
  public narratorStyle = NarratorStyle;
  protected override keywords: string = "testimony, believe, faith, Jesus, Word, change, repentance";

  ngOnInit() {}
}
