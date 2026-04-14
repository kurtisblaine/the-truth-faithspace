import { Component } from "@angular/core";

@Component({
  selector: "gospel-page-header",
  imports: [],
  template: `
    <div style="display: flex; align-items: center">
      <ng-content select="h1"></ng-content>
      <div class="divider">|</div>
      <ng-content select="h2"></ng-content>
    </div>
  `,
  styles: `.divider {margin-bottom: 16px; margin-top: 8px; padding: 0px 12px; font-size: 24px;}`,
})
export class PageHeaderComponent {}
