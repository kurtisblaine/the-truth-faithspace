import { ViewportScroller } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from "@angular/core";
import { fadeInOut } from "../shared/animations/animation";
import { ScriptService } from "../shared/service/script.service";
@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class HomePageComponent implements OnInit {
  @HostBinding("id.scrollProgress") someField = true;

  constructor(
    private viewportScroller: ViewportScroller,
    private scriptService: ScriptService
  ) {}

  ngOnInit() {
    console.log("");
    // this.scriptService.load("BLB").then(() => {
    //   this.scriptService.load("settings");
    // });
  }

  public toAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
