import { Component, OnInit } from "@angular/core";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { SeoBaseComponent } from "shared";
import { DataService } from "./data.service";
export class Image {
  id: string;
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
export class DrawPageComponent extends SeoBaseComponent implements OnInit {
  public images: Image[] = [];
  public faLink = faArrowUpRightFromSquare;

  constructor(private dataService: DataService) {
    super();
  }

  ngOnInit(): void {
    this.images = this.dataService.init();
  }
}
