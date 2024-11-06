import { ChangeDetectionStrategy, Component } from "@angular/core";
import { fadeInOut } from "../shared/animations/animation";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  animations: [fadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
