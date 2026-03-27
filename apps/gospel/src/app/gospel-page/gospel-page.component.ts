import { isPlatformBrowser, Location } from "@angular/common";
import {
  afterNextRender,
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewEncapsulation,
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { fullpageApi, fullpageOptions, Item, Trigger } from "fullpage.js/dist/fullpage.extensions.min";
import { DeviceDetectorService } from "ngx-device-detector";
import { distinctUntilChanged, filter, Subscription } from "rxjs";
import { SeoBaseComponent } from "../shared/components/seo-base/seo-base.component";

type TItem = { isActive: boolean } & Item;

@Component({
  selector: "gospel-gospel-page",
  standalone: false,
  templateUrl: "./gospel-page.component.html",
  styleUrl: "./gospel-page.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class GospelPageComponent extends SeoBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  public fullpageConfig: fullpageOptions = {
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
    normalScrollElements: ".card-content, .mat-drawer, .cdk-overlay-pane",

    scrollBar: true,
    loopHorizontal: false,
    loopBottom: false,
    loopTop: false,
    credits: { enabled: true, label: "May the Lord bless you.", position: "left" },
  };

  get isPlatformBrowser() {
    return isPlatformBrowser(this.platformId);
  }

  public isMobile = signal(true);

  public fullpageApi: fullpageApi;
  protected override keywords: string = "gospel, faith, righteous, live, kingdom, Jesus, revealed, truth";

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private deviceDetector: DeviceDetectorService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {
    super("https://thelightof.life/truth");

    afterNextRender(() => this.isMobile.set(this.deviceDetector.isMobile()));
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.routeSubscription?.unsubscribe();
  }

  override ngAfterViewInit(): void {
    this.routeSubscription = this.route.fragment
      .pipe(
        filter((fragment) => !!fragment),
        distinctUntilChanged()
      )
      .subscribe((fragment) => {
        const [sectionId, slideId] = fragment.split("/");
        this.toAnchor(sectionId, slideId);
      });
  }

  public toAnchor(sectionId: string, slideId: string = "") {
    this.fullpageApi.moveTo(sectionId, slideId);
  }

  private afterPageLoad(origin: TItem, destination: TItem, direction: string, trigger: Trigger) {
    if (!direction || !destination.isActive || !trigger) return;

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
