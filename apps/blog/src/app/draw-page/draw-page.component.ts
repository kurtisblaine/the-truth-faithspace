import { Component, OnInit } from "@angular/core";
interface Image {
  name?: string;
  description?: string;
  thumbnailUrl?: string;
  originUrl: string;
}
@Component({
  selector: "blog-draw-page",
  templateUrl: "./draw-page.component.html",
  styleUrls: ["./draw-page.component.scss"],
})
export class DrawPageComponent implements OnInit {
  public images: Image[] = [];
  constructor() {}

  ngOnInit(): void {
    this.images.push({ name: "", originUrl: "" });
  }
}
