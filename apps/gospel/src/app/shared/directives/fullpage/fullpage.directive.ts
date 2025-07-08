import { isPlatformServer } from "@angular/common";
import {
  AfterViewInit,
  Directive,
  EventEmitter,
  Inject,
  Input,
  isDevMode,
  OnDestroy,
  Output,
  PLATFORM_ID,
  Renderer2,
} from "@angular/core";

declare let fullpage: any;

@Directive({
  selector: "[gospelFullpage]",
})
export class FullpageDirective implements AfterViewInit, OnDestroy {
  @Input() id: string;
  @Input() options;
  @Output() ref = new EventEmitter();

  public fullpageApi;

  constructor(private renderer: Renderer2, @Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit() {
    if (isDevMode() || isPlatformServer(this.platformId)) {
      this.initFullpage();
    } else {
      this.renderer.removeClass(document.documentElement, "fp-enabled");
      this.initFullpage();
    }
  }

  initFullpage() {
    this.fullpageApi = new fullpage("#" + this.id, this.options);
    this.addBuildFunction();
    this.ref.emit(this.fullpageApi);
  }

  addBuildFunction() {
    this.fullpageApi.build = () => {
      const activeSection = this.fullpageApi.getActiveSection();
      const activeSlide = this.fullpageApi.getActiveSlide();
      this.destroyFullpage();
      if (activeSection) {
        this.renderer.addClass(activeSection.item, "active");
      }
      if (activeSlide) {
        this.renderer.addClass(activeSlide.item, "active");
      }
      this.initFullpage();
    };
  }

  destroyFullpage() {
    if (typeof this.fullpageApi !== "undefined" && typeof this.fullpageApi.destroy !== "undefined") {
      this.fullpageApi.destroy("all");
    }
  }

  ngOnDestroy() {
    this.destroyFullpage();
  }
}
