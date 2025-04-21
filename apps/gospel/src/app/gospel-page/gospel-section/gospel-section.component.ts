import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "blog-gospel-section",
  templateUrl: "./gospel-section.component.html",
  styleUrl: "./gospel-section.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class GospelSectionComponent {
  @Input() public isLightMode = true;
  @Input() public isFloater = false;
}
