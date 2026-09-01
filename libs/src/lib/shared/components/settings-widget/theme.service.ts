import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  public renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  public setTheme(theme: "light" | "dark") {
    this.renderer.setStyle(document.body, "color-scheme", theme);
    this.renderer.setAttribute(document.body, "color-scheme", theme);
    if (theme === "light") {
      this.renderer.addClass(document.body, "light-mode");
      this.renderer.removeClass(document.body, "dark-mode");
    } else {
      this.renderer.addClass(document.body, "dark-mode");
      this.renderer.removeClass(document.body, "light-mode");
    }
  }
}
