import { Location } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, signal, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FullpageDirective } from "@fullpage/angular-fullpage";
import { fullpageApi, fullpageOptions, Item, Trigger } from "fullpage.js/dist/fullpage.extensions.min";
import { DeviceDetectorService } from "ngx-device-detector";
import { distinctUntilChanged, filter, Subscription } from "rxjs";
type TItem = { isActive: boolean } & Item;

@Component({
  selector: "gospel-full-gospel",
  standalone: false,
  templateUrl: "./full-gospel.component.html",
  styleUrl: "./full-gospel.component.scss",
  changeDetection: ChangeDetectionStrategy.Default, //requires 'Default' so the audio player buttons will reset.
})
export class FullGospelComponent implements OnInit, AfterViewInit, OnDestroy {
  public config: fullpageOptions;
  public isMobile = signal(false);

  @ViewChild(FullpageDirective) public fullpageDirective: FullpageDirective;
  public fullpageApi: fullpageApi;

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private deviceDetector: DeviceDetectorService
  ) {}

  ngOnInit() {
    this.config = {
      licenseKey: "GM477-9I82I-1L8K9-194JK-TJUVR",

      controlArrows: false,
      navigation: true,
      navigationPosition: "right",
      slidesNavigation: true,
      slidesNavPosition: "bottom",
      recordHistory: true,

      afterLoad: this.afterPageLoad.bind(this),
      afterSlideLoad: this.afterSlideLoad.bind(this),
      lockAnchors: true,
      scrollOverflow: false,
      normalScrollElements: ".card-content, .mat-drawer",

      scrollBar: true,
      loopHorizontal: false,
      loopBottom: false,
      loopTop: false,
      credits: { enabled: true, label: "May the Lord keep you.", position: "left" },
    };
  }

  ngAfterViewInit(): void {
    this.fullpageApi = this.fullpageDirective.fullpageApi;

    this.routeSubscription = this.route.fragment
      .pipe(
        filter((fragment) => !!fragment),
        distinctUntilChanged()
      )
      .subscribe((fragment) => {
        const [sectionId, slideId] = fragment.split("/");
        this.toAnchor(sectionId, slideId);
      });

    this.isMobile.set(this.deviceDetector.isMobile());
    if (this.isMobile()) {
      this.fullpageApi.setResponsive(true);
    }
  }

  ngOnDestroy(): void {
    this.fullpageApi.destroy("all");
    this.routeSubscription.unsubscribe();
  }

  public toAnchor(sectionId: string, slideId: string = "") {
    this.fullpageApi.moveTo(sectionId, slideId);
  }

  private afterPageLoad(origin: TItem, destination: TItem, direction: string, trigger: Trigger) {
    if (!direction || !destination.isActive) return;

    let pageAnchor = destination.anchor?.toString();
    this.navigateToFragment(pageAnchor, "");
  }

  private afterSlideLoad(section: TItem, origin: TItem, destination: TItem, direction: string, trigger: Trigger) {
    if (!direction || !destination.isActive) return;

    const sectionId = section.anchor?.toString();
    const slideId = destination.anchor?.toString();
    this.navigateToFragment(sectionId, slideId);
  }

  private navigateToFragment(sectionId: string, slideId: string = "") {
    const fragment = slideId ? `${sectionId}/${slideId}` : sectionId;

    this.location.go(`/truth#${fragment}`);
  }
}
