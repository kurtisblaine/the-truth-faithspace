import { Component, OnInit } from "@angular/core";
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
  public images: Image[] = [];
  public faLink = faArrowUpRightFromSquare;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.images = this.dataService.init();
  }
}
