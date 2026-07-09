import { ChangeDetectionStrategy, Component } from "@angular/core";
import { Router } from "@angular/router";
import {
  faBible,
  faBook,
  faBrain,
  faDumbbell,
  faEnvelope,
  faGavel,
  faGifts,
  faInfoCircle,
  faLink,
  faMusic,
  faNewspaper,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { fadeInOut, SeoBaseComponent, slideInFromLeft, slideInFromRight } from "shared";

@Component({
  selector: "gospel-welcome-page",
  standalone: false,
  templateUrl: "./welcome-page.component.html",
  styleUrl: "./welcome-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class WelcomePageComponent extends SeoBaseComponent {
  public blogIcon = faDumbbell;
  public psalmIcon = faMusic;
  public discernIcon = faGavel;
  public insightIcon = faBrain;
  public drawingIcon = faPenToSquare;
  public studyIcon = faBook;

  public mailIcon = faEnvelope;
  public homeIcon = faInfoCircle;

  public giftsIcon = faGifts;
  public resourceIcon = faLink;
  public gospelIcon = faNewspaper;
  public bookIcon = faBible;

  constructor(private router: Router) {
    super({
      title: "The Light of Life",
      description:
        "In the dark one must feel their way around, for there is no light for them to see by; But Jesus Christ came into the world as the Light of the world, so that men might walk by Him and have the light of life.",
      canonicalUrl: "https://thelightof.life",
    });
  }

  public navigateToTruthPage() {
    this.router.navigateByUrl("/truth");
  }

  public navigateToBibleApp() {
    this.router.navigateByUrl("");
  }
}
