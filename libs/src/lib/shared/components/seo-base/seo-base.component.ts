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
  customPostfix?: string;
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

  @ViewChild("seoCaption", { read: ElementRef, static: false }) private seoCaption!: ElementRef; //120-158 characters
  @ViewChild("seoTitle", { read: ElementRef, static: false }) private seoTitle!: ElementRef; //50-60 characters

  protected keywords!: string;

  constructor(options: SeoOptions = {}) {
    this._setOptions(options);
  }

  ngAfterViewInit(): void {
    this.init();
  }

  init() {
    if (this.seoTitle?.nativeElement && this.seoTitle?.nativeElement?.innerText && !this._options?.title) {
      this.setTitle(
        this.seoTitle?.nativeElement?.innerText,
        this._options?.shouldPostfix,
        this._options?.customPostfix
      );
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

  private _setOptions(options: SeoOptions) {
    this._options = options;

    if (options?.canonicalUrl) {
      this.setCanonical(options.canonicalUrl);
    } else {
      const canonicalUrl = this.baseUrl + this._router.url;
      this.setCanonical(canonicalUrl);
    }

    if (options?.title) {
      const shouldPrefix = options?.shouldPostfix ?? true;
      this.setTitle(options.title, shouldPrefix);
    }

    if (options?.description) {
      this.setDescription(options.description);
    }
  }

  setKeywords(keywords: string) {
    this._meta.updateTag({ name: "keywords", content: keywords });
  }

  setDescription(description: string) {
    this._meta.updateTag({ name: "description", content: description });
  }

  setTitle(title: string, shouldPostfix: boolean = true, customPostfix: string = "") {
    this._title.setTitle(shouldPostfix ? title + this._appPostfix : customPostfix ? title + customPostfix : title);
  }
}
