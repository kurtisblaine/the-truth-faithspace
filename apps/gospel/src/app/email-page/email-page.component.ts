import { Component } from "@angular/core";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";

@Component({
  selector: "blog-email-page",
  templateUrl: "./email-page.component.html",
  styleUrls: ["./email-page.component.scss"],
  standalone: false,
})
export class EmailPageComponent extends SeoBaseComponent {
  protected override keywords: string = "contact, email, phone, help, kurtis, waldner";
}
