import { afterNextRender, Component, HostListener, OnInit } from "@angular/core";
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

  public columns: number = 4;
  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.columns = event.target.innerWidth <= 600 ? 2 : event.target.innerWidth <= 800 ? 3 : 4;
  }

  constructor(private dataService: DataService) {
    super();

    afterNextRender(() => window.dispatchEvent(new Event("resize")));
  }

  ngOnInit(): void {
    this.images = this.dataService.init();
  }
}
