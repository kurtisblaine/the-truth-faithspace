import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { DataService } from "./data.service";
export interface Image {
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
  public faLink = faArrowUpRightFromSquare;
  public images: Image[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  navigate(image: Image) {
    const cleanedFileName = image.fileName.split(".")[0];
    if (image.video) {
      this.router.navigateByUrl("drawings/draw/" + image.video + "/" + cleanedFileName, { state: image });
    } else {
      this.router.navigateByUrl("drawings/draw/" + cleanedFileName, { state: image });
    }
  }

  ngOnInit(): void {
    this.images = this.dataService.init();
  }
}
