import { DOCUMENT } from "@angular/common";
import { Inject, Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CanonicalService {
  private readonly renderer: Renderer2;
  constructor(@Inject(DOCUMENT) private document: Document, rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  createOrSetCanonicalUrl(url: string): void {
    const head = this.document.head;
    const existingLink = head.querySelector('link[rel="canonical"]');

    if (existingLink) {
      this.renderer.setAttribute(existingLink, "href", url);
    } else {
      const link = this.renderer.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", url);

      this.renderer.appendChild(head, link);
    }
  }
}
