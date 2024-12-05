import { ViewportScroller } from "@angular/common";
import { AfterViewInit, Component, HostBinding, OnInit, TemplateRef } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { fadeInOut } from "shared";
import { RouterService } from "./router.service";
import { TemplateService } from "./template.service";
@Component({
  selector: "blog-gospel",
  templateUrl: "./gospel.component.html",
  styleUrl: "./gospel.component.scss",
  animations: [fadeInOut],
})
export class GospelComponent implements AfterViewInit, OnInit {
  @HostBinding("id.scrollProgress") someField = true;

  // private sections: HTMLElement[] = [];
  // @ViewChild("dangerFutility") dangerFutility: ElementRef;
  // @ViewChild("dangerSin")
  // dangerSin: ElementRef;
  // @ViewChild("callGrace") callGrace: ElementRef;
  // @ViewChild("callFaith") callFaith: ElementRef;
  // @ViewChild("ourResponse") ourResponse: ElementRef;
  // @ViewChild("theHope") hopeTheDay: ElementRef;

  // @HostListener("window:scroll", [])
  // onScroll() {
  //   if (!this.sections.length) return;

  //   for (const section of this.sections) {
  //     if (this.routerService.isElementInViewport(section)) {
  //       const isTheSame = window.location.hash.split("#").pop() == section.id;
  //       if (isTheSame) return;

  //       this.router.navigate([], {
  //         fragment: section.id,
  //         queryParamsHandling: "merge",
  //       });
  //       break;
  //     }
  //   }
  // }

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    public templateService: TemplateService,
    public routerService: RouterService,
    public activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const hashes = window.location.hash.split("#");
    if (hashes.length > 2) {
      this.viewportScroller.scrollToAnchor(hashes.pop());
      // this.router.navigate([], {
      //   fragment: hashes.pop(),
      //   queryParamsHandling: "merge",
      // });
    }

    // this.sections = [
    //   this.dangerFutility.nativeElement,
    //   this.dangerSin.nativeElement,
    //   this.callGrace.nativeElement,
    //   this.callFaith.nativeElement,
    //   this.ourResponse.nativeElement,
    //   this.hopeTheDay.nativeElement,
    // ];

    (window as any).BLB.Tagger.pageInit();
  }

  public toAnchor(elementId: string): void {
    this.router.navigate([], {
      fragment: elementId,
      queryParamsHandling: "merge",
      onSameUrlNavigation: "ignore",
    });
  }

  public navigateToGospelItem(title: string, element: TemplateRef<any>) {
    this.templateService.add(title, element);
    this.router.navigateByUrl(`truthful-item/${title}`);
  }
}
