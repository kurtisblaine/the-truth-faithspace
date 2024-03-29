import { ViewportScroller } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";
import { fadeInOut } from "../shared/animations/animation";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export default class HomePageComponent implements AfterViewInit, OnInit {
  @HostBinding("id.scrollProgress") someField = true;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit() {
    console.log("");
  }

  ngAfterViewInit(): void {
    (window as any).BLB.Tagger.pageInit();
  }

  public toAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
