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
}

export const APP_POSTFIX = new InjectionToken<string>("APP_POSTFIX", {
  providedIn: "root",
  factory: () => "",
});

export const BASE_URL = new InjectionToken<string>("BASE_URL", {
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
  private canonicalService = inject(CanonicalService);
  private meta = inject(Meta);
  private title = inject(Title);
  private appPostfix = inject(APP_POSTFIX);

  public baseUrl = inject(BASE_URL);

  @ViewChild("seoCaption", { read: ElementRef, static: false }) private seoCaption!: ElementRef;
  @ViewChild("seoTitle", { read: ElementRef, static: false }) private seoTitle!: ElementRef;

  protected keywords!: string;

  constructor() {}

  ngAfterViewInit(): void {
    this.init();
  }

  init(options: SeoOptions = {}) {
    this.setCanonical(options?.canonicalUrl ?? "");

    if (this.seoTitle?.nativeElement && this.seoTitle?.nativeElement?.innerText) {
      this.setTitle(this.seoTitle?.nativeElement?.innerText + this.appPostfix);
    }
    if (this.seoCaption?.nativeElement && this.seoCaption?.nativeElement?.innerText) {
      this.setDescription(this.seoCaption?.nativeElement?.innerText);
    }
    if (this.keywords) {
      this.setKeywords(this.keywords);
    }
  }

  setCanonical(canonicalUrl: string) {
    this.canonicalService.createOrSetCanonicalUrl(canonicalUrl ?? "");
  }

  setKeywords(keywords: string) {
    this.meta.updateTag({ name: "keywords", content: keywords });
  }

  setDescription(description: string) {
    this.meta.updateTag({ name: "description", content: description });
  }

  setTitle(title: string) {
    this.title.setTitle(title);
  }
}
