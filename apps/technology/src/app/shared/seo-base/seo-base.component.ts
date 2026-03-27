import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Directive,
  ElementRef,
  inject,
  ViewChild,
} from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Directive({ selector: "[seoCaption]" })
export class SeoCaptionDirective {
  constructor(public elementRef: ElementRef) {}
}

@Directive({ selector: "[seoTitle]" })
export class SeoTitleDirective {
  constructor(public elementRef: ElementRef) {}
}

@Component({
  selector: "app-seo-base",
  imports: [CommonModule],
  template: ``,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeoBaseComponent implements AfterViewInit {
  private meta = inject(Meta);
  private title = inject(Title);

  @ViewChild("seoCaption", { read: ElementRef }) private seoCaption!: ElementRef;
  @ViewChild("seoTitle", { read: ElementRef }) private seoTitle!: ElementRef;

  protected keywords!: string;

  constructor() {}

  ngAfterViewInit(): void {
    this.init();
  }

  init() {
    if (this.seoTitle?.nativeElement && this.seoTitle?.nativeElement?.innerText) {
      this.title.setTitle(this.seoTitle?.nativeElement?.innerText);
    }
    if (this.seoCaption?.nativeElement && this.seoCaption?.nativeElement?.innerText) {
      this.meta.addTag({ name: "description", content: this.seoCaption?.nativeElement?.innerText });
    }
    if (this.keywords) {
      this.meta.addTag({ name: "keywords", content: this.keywords });
    }
  }
}
