import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatRippleModule } from "@angular/material/core";
import { Router } from "@angular/router";
import { fadeInOut } from "shared";

@Component({
  selector: "app-member-details",
  imports: [CommonModule, MatRippleModule],
  animations: [fadeInOut],
  templateUrl: "./member-details.component.html",
  styleUrl: "./member-details.component.scss",
})
export class MemberDetailsComponent {
  constructor(private router: Router) {}

  public navigateToMembershipPage() {
    this.router.navigateByUrl("/about/membership");
  }
}
