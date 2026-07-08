import { ChangeDetectionStrategy, Component, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { fadeInOut, SeoBaseComponent, slideInFromLeft, slideInFromRight } from "shared";

@Component({
  selector: "gospel-welcome-page",
  standalone: false,
  templateUrl: "./welcome-page.component.html",
  styleUrl: "./welcome-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class WelcomePageComponent extends SeoBaseComponent {
  constructor(private router: Router) {
    super({ title: "The Light of Life", description: "TODO", canonicalUrl: "https://thelightof.life" });
  }

  public navigateToTruthPage() {
    this.router.navigateByUrl("/truth");
  }

  public navigateToBibleApp() {
    this.router.navigateByUrl("");
  }
}
