import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { fadeInOut } from "shared";
import { WindowService } from "../gospel-page/window.service";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export default class HomePageComponent implements OnInit, AfterViewInit {
  constructor(private windowService: WindowService) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    if (this.windowService.nativeWindow) {
      (this.windowService.nativeWindow as any).BLB.Tagger.pageInit();
    }
  }
}
