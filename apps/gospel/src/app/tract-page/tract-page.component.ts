import { Component } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "blog-tract-page",
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.scss",
  standalone: false,
})
export class TractPageComponent {
  constructor(private router: Router, private meta: Meta, private title: Title) {}

  openLink(link: string) {
    window.open(link, "_blank");
  }
}
