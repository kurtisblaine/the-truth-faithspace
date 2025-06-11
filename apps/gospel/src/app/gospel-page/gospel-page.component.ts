import { ChangeDetectionStrategy, Component } from "@angular/core";
import { isScullyRunning } from "@scullyio/ng-lib";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";

@Component({
  selector: "gospel-gospel-page",
  standalone: false,
  templateUrl: "./gospel-page.component.html",
  styleUrl: "./gospel-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GospelPageComponent extends SeoBaseComponent {
  public renderUserExperience = !isScullyRunning();
}
