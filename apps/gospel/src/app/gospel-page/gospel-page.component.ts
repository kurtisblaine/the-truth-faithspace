import { Location } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FullpageDirective } from "@fullpage/angular-fullpage";
import { fullpageApi, fullpageOptions, Item, Trigger } from "fullpage.js/dist/fullpage.extensions.min";
import { distinctUntilChanged, filter, Subscription } from "rxjs";
type TItem = { isActive: boolean } & Item;

@Component({
  selector: "gospel-gospel-page",
  standalone: false,
  templateUrl: "./gospel-page.component.html",
  styleUrl: "./gospel-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GospelPageComponent implements OnInit, AfterViewInit, OnDestroy {
  public config: fullpageOptions;
  public showAccordion = false;

  @ViewChild(FullpageDirective) public fullpageDirective: FullpageDirective;
  public fullpageApi: fullpageApi;

  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    setTimeout(() => {
      this.showAccordion = true;
    }, 0);

    this.config = {
      licenseKey: "GM477-9I82I-1L8K9-194JK-TJUVR",

      controlArrows: false,
      navigation: true,
      navigationPosition: "left",
      slidesNavigation: true,
      slidesNavPosition: "bottom",

      afterLoad: this.afterPageLoad.bind(this),
      afterSlideLoad: this.afterSlideLoad.bind(this),
      lockAnchors: true,
      scrollOverflow: false,
      normalScrollElements: ".card-content",
      // responsiveHeight: 700,
      // responsiveWidth: 700,
      // parallax: true,
      // responsiveSlides: true,
      // scrollHorizontally: true,
      scrollBar: true,
      loopHorizontal: false,
      loopBottom: false,
      loopTop: false,
      credits: { enabled: true, label: "Blessings to you in the Lord.", position: "left" },
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
