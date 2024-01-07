/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EnvironmentInjector,
  HostBinding,
  OnInit,
  ViewChild,
} from "@angular/core";
import { FullpageDirective } from "@fullpage/angular-fullpage";
import {
  fullpageApi,
  fullpageOptions,
} from "fullpage.js/dist/fullpage.extensions.min";
import { fadeInOut } from "../shared/animations/animation";

@Component({
  selector: "blog-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [fadeInOut],
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @HostBinding("id.scrollProgress") someField = true;
  public config: fullpageOptions;
  public fullpageApi: fullpageApi;

  @ViewChild(FullpageDirective)
  fullpageDirective: FullpageDirective;

  constructor(private injector: EnvironmentInjector) {
    this.config = {
      licenseKey: "GM477-9I82I-1L8K9-194JK-TJUVR",
      anchors: [
        "firstPage",
        "secondPage",
        "thirdPage",
        "fourthPage",
        "lastPage",
      ],
      credits: { enabled: false },
      // menu: "#menu",
      navigation: true,
      sectionsColor: ["#1bbc9b", "#4BBFC3", "#7BAABE", "whitesmoke", "#ccddff"],
      // events callback
      afterLoad: (origin, destination, direction) => {
        // console.log(destination);
      },
      afterRender: () => {
        // console.log('afterRender');
      },
      afterResize: (width, height) => {
        // console.log('afterResize' + width + ' ' + height);
      },
      afterSlideLoad: (section, origin, destination, direction) => {
        // console.log(destination);
      },
    };
  }

  ngAfterViewInit() {
    this.fullpageApi = this.fullpageDirective.fullpageApi;
  }

  ngOnInit(): void {}
}
