import { Component } from "@angular/core";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";
import { WindowService } from "../shared/service/window.service";

@Component({
  selector: "blog-tract-page",
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.scss",
  standalone: false,
})
export class TractPageComponent extends SeoBaseComponent {
  override keywords: string = "tracts, bookmarks, cards, reminder, print, truth, eternity";

  constructor(private windowService: WindowService) {
    super();
  }

  openLink(link: string) {
    this.windowService.nativeWindow?.open(link, "_blank");
  }
}
