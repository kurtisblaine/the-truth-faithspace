import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { fadeInOut, slideInFromLeft, slideInFromRight } from "shared";
import { EventDetailsComponent } from "../shared/component/event-details/event-details.component";
import { MemberDetailsComponent } from "../shared/component/member-details/member-details.component";

@Component({
  selector: "app-home-page",
  imports: [
    CommonModule,
    NgOptimizedImage,
    EventDetailsComponent,
    MemberDetailsComponent,
    MatDividerModule,
    MatButtonModule,
  ],
  templateUrl: "./home-page.component.html",
  styleUrl: "./home-page.component.scss",
  animations: [slideInFromRight, slideInFromLeft, fadeInOut],
})
export class HomePageComponent {}
