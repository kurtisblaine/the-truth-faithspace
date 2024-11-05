import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { fadeInOut } from "../shared/animations/animation";
@Component({
  selector: "app-home",
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDividerModule],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
  animations: [fadeInOut],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
