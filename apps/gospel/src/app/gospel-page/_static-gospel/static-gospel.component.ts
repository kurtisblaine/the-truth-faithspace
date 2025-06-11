import { AfterViewInit, ChangeDetectionStrategy, Component, HostBinding, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "gospel-static-gospel",
  standalone: false,
  templateUrl: "./static-gospel.component.html",
  styleUrl: "./static-gospel.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StaticGospelComponent implements AfterViewInit, OnInit {
  public showAccordion = false;
  @HostBinding("id.scrollProgress") someField = true;

  constructor(private router: Router, public activeRoute: ActivatedRoute) {}

  ngOnInit() {
    setTimeout(() => {
      this.showAccordion = true;
    }, 0);
  }

  ngAfterViewInit(): void {
    // if (this.windowService.nativeWindow) {
    //   (this.windowService.nativeWindow as any).BLB.Tagger.pageInit();
    // }
  }

  public toAnchor(elementId: string): void {
    this.router.navigate([], {
      fragment: elementId,
      queryParamsHandling: "merge",
      onSameUrlNavigation: "ignore",
    });
  }
}
