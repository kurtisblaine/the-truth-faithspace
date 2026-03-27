import { Component, OnInit } from "@angular/core";
import { Meta } from "@angular/platform-browser";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { DataService } from "./data.service";
export class Image {
  id: number;
  name?: string;
  description: string;
  footer: string;
  originUrl: string;
  isFinishedLoading?: boolean;
  video?: string;
  fileName?: string;
}
@Component({
  selector: "blog-draw-page",
  templateUrl: "./draw-page.component.html",
  styleUrls: ["./draw-page.component.scss"],
  standalone: false,
})
export class DrawPageComponent implements OnInit {
  private readonly metaDescription =
    "Drawings to help visualize important topics, to help compare things that are alike and contrast things that are not.";
  public images: Image[] = [];
  public faLink = faArrowUpRightFromSquare;

  constructor(private dataService: DataService, private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: "description",
      content: this.metaDescription,
    });

    this.images = this.dataService.init();
  }
}
