import { ViewportScroller } from "@angular/common";
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
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

  private sections: ElementRef[] = [];
  @ViewChild("dangerFutility") dangerFutility: ElementRef;
  @ViewChild("dangerSin") dangerSin: ElementRef;
  @ViewChild("callGrace") callGrace: ElementRef;
  @ViewChild("callFaith") callFaith: ElementRef;
  @ViewChild("ourResponse") ourResponse: ElementRef;
  @ViewChild("theHope") hopeTheDay: ElementRef;

  @HostListener("window:scroll", [])
  onScroll() {
    if (!this.sections.length) return;

    for (const section of this.sections) {
      if (this.routerService.isElementInViewport(section.nativeElement)) {
        const isTheSame = window.location.hash.split("#").pop() == section.nativeElement.id;
        if (isTheSame) return;

        this.router.navigate([], {
          fragment: section.nativeElement.id,
          queryParamsHandling: "merge",
          onSameUrlNavigation: "ignore",
        });
        break;
      }
    }
  }

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    public templateService: TemplateService,
    public routerService: RouterService,
    public activeRoute: ActivatedRoute
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    (window as any).BLB.Tagger.pageInit();

    this.sections = [
      this.dangerFutility,
      this.dangerSin,
      this.callGrace,
      this.callFaith,
      this.ourResponse,
      this.hopeTheDay,
    ];
  }

  public toAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public navigateToGospelItem(title: string, element: TemplateRef<any>) {
    this.templateService.add(title, element);
    this.router.navigateByUrl(`truthful-item/${title}`);
  }
}
