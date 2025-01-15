import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "blog-tract-page",
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.css",
  standalone: false,
})
export class TractPageComponent {
  constructor(private router: Router) {}
  openLink(link: string) {
    window.open(link, "_blank");
  }
}
