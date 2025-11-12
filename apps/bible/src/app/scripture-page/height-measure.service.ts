import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class ElementMeasureService {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2, private sanitizer: DomSanitizer) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Measures the height of a dynamically created element offscreen.
   * @param tagName The HTML tag name of the element to create.
   * @param content The content (text or HTML) to put inside the element.
   * @param styles Optional CSS styles to apply for accurate measurement (e.g., width constraints).
   * @returns The height in pixels.
   */
  measureElementHeight(tagName: string, content: string, styles?: { [key: string]: string }): number {
    const element = this.renderer.createElement(tagName);
    const trustworthyHtml = this.sanitizer.bypassSecurityTrustHtml(content);
    this.renderer.setProperty(element, "innerHTML", trustworthyHtml);

    this.renderer.setStyle(element, "position", "absolute");
    this.renderer.setStyle(element, "left", "-9999px");
    this.renderer.setStyle(element, "top", "-9999px");
    this.renderer.setStyle(element, "visibility", "hidden");
    this.renderer.setStyle(element, "height", "auto");

    if (styles) {
      Object.keys(styles).forEach((styleKey) => {
        this.renderer.setStyle(element, styleKey, styles[styleKey]);
      });
    }

    this.renderer.appendChild(document.body, element);

    let { height } = element.getBoundingClientRect();
    if (element.innerHTML.startsWith("SafeValue")) {
      height = height - 27 * 2;
    }

    this.renderer.removeChild(document.body, element);
    return height;
  }
}
