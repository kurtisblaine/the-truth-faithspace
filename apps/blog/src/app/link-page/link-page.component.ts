import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterModule } from "@angular/router";

@Component({
  selector: "blog-link-page",
  standalone: true,
  imports: [CommonModule, MatListModule, RouterModule],
  templateUrl: "./link-page.component.html",
  styleUrl: "./link-page.component.css",
})
export class LinkPageComponent {}
