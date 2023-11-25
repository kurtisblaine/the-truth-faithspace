import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "blog-tract-page",
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.css",
})
export class TractPageComponent {}
