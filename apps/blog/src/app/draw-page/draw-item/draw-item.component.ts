import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "blog-draw-item",
  templateUrl: "./draw-item.component.html",
  styleUrls: ["./draw-item.component.css"],
})
export class DrawItemComponent implements OnInit, AfterViewInit {
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("id") public fileName: string;
  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input("video") public youtubeVideo: string;

  constructor(
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  @ViewChild("youTubePlayer") youTubePlayer: ElementRef<HTMLDivElement>;

  videoHeight: number | undefined;
  videoWidth: number | undefined;

  ngOnInit(): void {
    // this.route.params.subscribe((r) => {
    //   this.fileName = r["id"];
    //   if (r["video"] && r["video"] !== "undefined")
    //     this.youtubeVideo = r["video"];
    // });
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener("resize", this.onResize.bind(this));
  }

  onResize(): void {
    if (!this.youTubePlayer) return;
    // you can remove this line if you want to have wider video player than 1200px
    this.videoWidth = Math.min(
      this.youTubePlayer.nativeElement.clientWidth,
      1200
    );
    // so you keep the ratio
    this.videoHeight = this.videoWidth * 0.6;
    this.changeDetectorRef.detectChanges();
  }
}
