import { AfterViewInit, Component, HostBinding, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { fadeInOut } from "shared";
import { RouterService } from "../router.service";
import { TemplateService } from "../template.service";
import { WindowService } from "../window.service";
@Component({
  selector: "blog-gospel",
  templateUrl: "./gospel.component.html",
  styleUrl: "./gospel.component.scss",
  animations: [fadeInOut],
  standalone: false,
})
export class GospelComponent implements AfterViewInit, OnInit {
  public showAccordion = false;
  @HostBinding("id.scrollProgress") someField = true;

  constructor(
    private router: Router,
    public templateService: TemplateService,
    public routerService: RouterService,
    public activeRoute: ActivatedRoute,
    private windowService: WindowService
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.showAccordion = true;
    }, 0);
  }

  ngAfterViewInit(): void {
    if (this.windowService.nativeWindow) {
      (this.windowService.nativeWindow as any).BLB.Tagger.pageInit();
    }
  }

  public toAnchor(elementId: string): void {
    this.router.navigate([], {
      fragment: elementId,
      queryParamsHandling: "merge",
      onSameUrlNavigation: "ignore",
    });
  }
}
