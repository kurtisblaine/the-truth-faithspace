import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { faArrowUpRightFromSquare, faImage } from "@fortawesome/free-solid-svg-icons";
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
  public imageIcon = faImage;
  public faLink = faArrowUpRightFromSquare;
  public images: Image[] = [];

  constructor(private router: Router, private dataService: DataService) {}

  navigate(image: Image) {
    if (image.video) {
      this.router.navigateByUrl("drawings/draw/" + image.video + "/" + image.fileName, { state: image });
    } else {
      this.router.navigateByUrl("drawings/draw/" + image.fileName, { state: image });
    }
  }

  // hideLoader(id: number) {
  //   const i = this.dataService.images.find((image) => image.id === id);
  //   i.isFinishedLoading = true;
  // }

  ngOnInit(): void {
    this.images = this.dataService.init();
  }
}
