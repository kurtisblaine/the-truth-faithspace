import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { NarratorStyle } from "libs/src/lib/shared/components/narrator/narrator.component";

@Component({
  selector: "blog-gospel-section",
  templateUrl: "./gospel-section.component.html",
  styleUrl: "./gospel-section.component.scss",
  changeDetection: ChangeDetectionStrategy.Default,
  standalone: false,
})
export class GospelSectionComponent {
  @Input() public isLightMode = true;
  @Input() public isFloater = false;

  public narratorStyle = NarratorStyle;
}
