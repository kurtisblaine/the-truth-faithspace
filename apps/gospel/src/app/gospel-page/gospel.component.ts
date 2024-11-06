import { ViewportScroller } from "@angular/common";
import { AfterViewInit, Component, HostBinding, OnInit } from "@angular/core";
import { fadeInOut } from "shared";

@Component({
  selector: "blog-gospel",
  templateUrl: "./gospel.component.html",
  styleUrl: "./gospel.component.scss",
  animations: [fadeInOut],
})
export class GospelComponent implements AfterViewInit, OnInit {
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
