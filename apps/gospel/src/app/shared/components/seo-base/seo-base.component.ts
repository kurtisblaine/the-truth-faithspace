import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewChild } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "gospel-seo-base",
  imports: [CommonModule],
  template: ``,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeoBaseComponent implements AfterViewInit {
  @ViewChild("seoCaption") private seoCaption: ElementRef;
  @ViewChild("seoTitle") private seoTitle: ElementRef;

  protected keywords: string;

  constructor(private meta: Meta, private title: Title) {}

  ngAfterViewInit(): void {
    this.title.setTitle(this.seoTitle.nativeElement.innerText);
    this.meta.addTags([
      { name: "description", content: this.seoCaption.nativeElement.innerText },
      { name: "keywords", content: this.keywords },
    ]);
  }
}
