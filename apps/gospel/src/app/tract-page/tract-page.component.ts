import { Component } from "@angular/core";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";

@Component({
  selector: "blog-tract-page",
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.scss",
  standalone: false,
})
export class TractPageComponent extends SeoBaseComponent {
  override keywords: string = "tracts, bookmarks, cards, reminder, print, truth, eternity";

  openLink(link: string) {
    window.open(link, "_blank");
  }
}
