import { Component } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { ContactFormComponent, fadeInOut, slideInFromLeft, slideInFromRight } from "shared";
import { MemberDetailsComponent } from "../shared/component/member-details/member-details.component";

@Component({
  selector: "app-membership-page",
  imports: [MemberDetailsComponent, ContactFormComponent, MatDividerModule],
  animations: [fadeInOut, slideInFromLeft, slideInFromRight],
  templateUrl: "./membership-page.component.html",
  styleUrl: "./membership-page.component.scss",
})
export class MembershipPageComponent {}
