import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
import { Image } from "../draw-page.component";

@Component({
  selector: "blog-draw-item",
  templateUrl: "./draw-item.component.html",
  styleUrls: ["./draw-item.component.css"],
  standalone: false,
})
export class DrawItemComponent implements OnInit, AfterViewInit, OnDestroy {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("id") public fileName: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("video") public youtubeVideo: string;

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private dataService: DataService
  ) {}

  @ViewChild("youTubePlayer") youTubePlayer: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  selectedImage: Image;

  ngOnInit(): void {
    const images = this.dataService.init();
    this.selectedImage = images.find((i) => i.fileName == this.fileName);
  }

  ngOnDestroy() {}

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize(): void {
    if (!this.youTubePlayer) return;
    // you can remove this line if you want to have wider video player than 1200px
    this.videoWidth = Math.min(this.youTubePlayer.nativeElement.clientWidth, 1200);
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }
}
