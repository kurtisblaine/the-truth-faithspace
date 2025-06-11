import { CommonModule } from "@angular/common";
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "gospel-seo-base",
  imports: [CommonModule],
  template: ``,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeoBaseComponent implements AfterViewInit {
  private meta = inject(Meta);
  private title = inject(Title);

  @ViewChild("seoCaption", { read: ElementRef }) private seoCaption: ElementRef;
  @ViewChild("seoTitle", { read: ElementRef }) private seoTitle: ElementRef;

  protected keywords: string;

  ngAfterViewInit(): void {
    this.title.setTitle(this.seoTitle.nativeElement.innerText);
    this.meta.addTags([
      { name: "description", content: this.seoCaption.nativeElement.innerText },
      { name: "keywords", content: this.keywords },
    ]);
  }
}
