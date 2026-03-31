import { CommonModule } from "@angular/common";
import {
  afterNextRender,
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
import { Router } from "@angular/router";
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
  title?: string;
  description?: string;
  shouldPostfix?: boolean;
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
  private _canonicalService = inject(CanonicalService);
  private _meta = inject(Meta);
  private _title = inject(Title);
  private _router = inject(Router);

  private _options!: SeoOptions;

  private _appPostfix = inject(APP_POSTFIX);
  public baseUrl = inject(BASE_URL);

  @ViewChild("seoCaption", { read: ElementRef, static: false }) private seoCaption!: ElementRef;
  @ViewChild("seoTitle", { read: ElementRef, static: false }) private seoTitle!: ElementRef;

  protected keywords!: string;

  constructor(options: SeoOptions = {}) {
    this._options = options;

    afterNextRender(() => {
      if (options?.canonicalUrl) {
        this.setCanonical(options.canonicalUrl);
      } else {
        const canonicalUrl = document.location.origin + this._router.url;
        this.setCanonical(canonicalUrl);
      }

      if (options?.title) {
        const shouldPrefix = options?.shouldPostfix ?? true;
        this.setTitle(shouldPrefix ? options.title + this._appPostfix : options.title);
      }
    });
  }

  ngAfterViewInit(): void {
    this.init();
  }

  init() {
    if (this.seoTitle?.nativeElement && this.seoTitle?.nativeElement?.innerText && !this._options?.title) {
      this.setTitle(this.seoTitle?.nativeElement?.innerText + this._appPostfix);
    }
    if (this.seoCaption?.nativeElement && this.seoCaption?.nativeElement?.innerText && !this._options?.description) {
      this.setDescription(this.seoCaption?.nativeElement?.innerText);
    }
    if (this.keywords) {
      this.setKeywords(this.keywords);
    }
  }

  private setCanonical(canonicalUrl: string) {
    this._canonicalService.createOrSetCanonicalUrl(canonicalUrl ?? "");
  }

  setKeywords(keywords: string) {
    this._meta.updateTag({ name: "keywords", content: keywords });
  }

  setDescription(description: string) {
    this._meta.updateTag({ name: "description", content: description });
  }

  private setTitle(title: string) {
    this._title.setTitle(title);
  }
}
