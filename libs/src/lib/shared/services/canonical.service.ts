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

  createCanonicalUrl(url: string): void {
    const link = this.renderer.createElement("link");
    link.setAttribute("rel", "canonical");
    // Ensure the URL is absolute and clean of dynamic parameters
    link.setAttribute("href", url);

    const head = this.document.head;
    const existingLink = head.querySelector('link[rel="canonical"]');

    if (existingLink) {
      this.renderer.setAttribute(existingLink, "href", url);
    } else {
      this.renderer.appendChild(head, link);
    }
  }
}
