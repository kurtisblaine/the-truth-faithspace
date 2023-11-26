import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";

@Component({
  selector: "blog-tract-page",
  standalone: true,
  imports: [CommonModule, RouterModule, MatListModule],
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.css",
})
export class TractPageComponent {}
