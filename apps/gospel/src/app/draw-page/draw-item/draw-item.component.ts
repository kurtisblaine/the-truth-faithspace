import { Component, Input, OnInit } from "@angular/core";
import { DataService } from "../data.service";
import { Image } from "../draw-page.component";

@Component({
  selector: "blog-draw-item",
  templateUrl: "./draw-item.component.html",
  styleUrls: ["./draw-item.component.scss"],
  standalone: false,
})
export class DrawItemComponent implements OnInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("id") public fileName: string;

  constructor(private dataService: DataService) {}

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  selectedImage: Image;

  ngOnInit(): void {
    const images = this.dataService.init();
    this.selectedImage = images.find((i) => i.fileName === this.fileName + ".webp");
  }
}
