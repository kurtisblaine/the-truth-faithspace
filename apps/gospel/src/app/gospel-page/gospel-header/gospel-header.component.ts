import { Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

@Component({
  selector: "blog-gospel-header",
  templateUrl: "./gospel-header.component.html",
  styleUrl: "./gospel-header.component.scss",
  imports: [MatCardModule],
})
export class GospelHeaderComponent {
  @Input() public isLightMode = true;
}
