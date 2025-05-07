import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "blog-gospel-header",
  templateUrl: "./gospel-header.component.html",
  styleUrl: "./gospel-header.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class GospelHeaderComponent {
  @Input() public isLightMode = true;
}
