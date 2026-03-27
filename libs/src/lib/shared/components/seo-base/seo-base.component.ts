import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  inject,
  InjectionToken,
  ViewChild,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";
import { CanonicalService } from "shared";

@Directive({ selector: "[seoCaption]" })
export class SeoCaptionDirective {
  constructor(public elementRef: ElementRef) {}
}

@Directive({ selector: "[seoTitle]" })
export class SeoTitleDirective {
  constructor(public elementRef: ElementRef) {}
}

export class SeoOptions {
  canonicalUrl?: string;
  captionOverride?: string;
}

export const APP_POSTFIX = new InjectionToken<string>("APP_POSTFIX", {
  providedIn: "root",
  factory: () => "",
});

@Component({
  selector: "lib-seo-base",
  imports: [CommonModule],
  template: ``,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeoBaseComponent implements AfterViewInit {
  private meta = inject(Meta);
  private title = inject(Title);
  private canonicalService = inject(CanonicalService);
  private appPostfix = inject(APP_POSTFIX);

  @ViewChild("seoCaption", { read: ElementRef, static: false }) private seoCaption!: ElementRef;
  @ViewChild("seoTitle", { read: ElementRef, static: false }) private seoTitle!: ElementRef;

  protected keywords!: string;

  constructor() {}

  ngAfterViewInit(): void {
    this.init();
  }

  init(options: SeoOptions = {}) {
    this.canonicalService.createCanonicalUrl(options?.canonicalUrl ?? "");

    if (this.seoTitle?.nativeElement && this.seoTitle?.nativeElement?.innerText) {
      this.title.setTitle(this.seoTitle?.nativeElement?.innerText + this.appPostfix);
    }
    if (options?.captionOverride) {
      this.meta.updateTag({ name: "description", content: options?.captionOverride });
    } else if (this.seoCaption?.nativeElement && this.seoCaption?.nativeElement?.innerText) {
      this.meta.updateTag({ name: "description", content: this.seoCaption?.nativeElement?.innerText });
    }
    if (this.keywords) {
      this.meta.updateTag({ name: "keywords", content: this.keywords });
    }
  }
}
