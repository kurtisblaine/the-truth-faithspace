import { ViewportScroller } from "@angular/common";
import { AfterViewInit, Component, HostBinding, OnInit, TemplateRef } from "@angular/core";
import { Router } from "@angular/router";
import { fadeInOut } from "shared";
import { TemplateService } from "./template.service";
@Component({
  selector: "blog-gospel",
  templateUrl: "./gospel.component.html",
  styleUrl: "./gospel.component.scss",
  animations: [fadeInOut],
})
export class GospelComponent implements AfterViewInit, OnInit {
  @HostBinding("id.scrollProgress") someField = true;

  constructor(
    private viewportScroller: ViewportScroller,
    private router: Router,
    private templateService: TemplateService
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    (window as any).BLB.Tagger.pageInit();
  }

  public toAnchor(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }

  public navigateToGospelItem(title: string, element: TemplateRef<any>) {
    this.templateService.templateRef = element;
    this.templateService.title = title;
    this.router.navigateByUrl("truthful-item");
  }
}
