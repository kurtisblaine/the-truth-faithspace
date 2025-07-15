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
  public images: Image[] = [];
  public faLink = faArrowUpRightFromSquare;

  constructor(private dataService: DataService, private router: Router) {}

  ngOnInit(): void {
    this.images = this.dataService.init();
  }

  navigate(image: Image) {
    const cleanedFileName = image.fileName.split(".")[0];
    const url = this.router.serializeUrl(this.router.createUrlTree(["drawings/draw/" + cleanedFileName]));

    window.open(url, "_blank");
  }
}
