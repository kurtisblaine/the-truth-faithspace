import { isPlatformBrowser } from "@angular/common";
import { Component, Inject, Input, OnInit, PLATFORM_ID } from "@angular/core";
import { SeoBaseComponent } from "shared";
import { DataService } from "../data.service";
import { Image } from "../draw-page.component";

@Component({
  selector: "blog-draw-item",
  templateUrl: "./draw-item.component.html",
  styleUrls: ["./draw-item.component.scss"],
  standalone: false,
})
export class DrawItemComponent extends SeoBaseComponent implements OnInit {
  @Input() public id: string;

  protected override keywords: string = "study, draw, Jesus, hope, life, faith, truth, love, Christ, Messiah";

  constructor(private dataService: DataService, @Inject(PLATFORM_ID) private platformId: object) {
    super({ shouldPostfix: false, customPostfix: " | Drawing" });
  }

  get isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  selectedImage: Image;

  ngOnInit(): void {
    const images = this.dataService.init();
    this.selectedImage = images.find((i) => i.id === this.id);
  }
}
