import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { ContactFormComponent, SeoBaseComponent } from "shared";

@Component({
  selector: "app-contact-page",
  imports: [MatCardModule, ContactFormComponent],
  templateUrl: "./contact-page.component.html",
  styleUrl: "./contact-page.component.scss",
})
export class ContactPageComponent extends SeoBaseComponent {
  constructor() {
    super();
  }
}
