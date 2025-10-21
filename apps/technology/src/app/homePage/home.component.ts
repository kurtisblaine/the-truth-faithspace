import { ChangeDetectionStrategy, Component } from "@angular/core";
import { fadeInOut, NarratorStyle } from "../../../../../libs/src";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  animations: [fadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HomeComponent {
  public narratorStyle = NarratorStyle;
}
