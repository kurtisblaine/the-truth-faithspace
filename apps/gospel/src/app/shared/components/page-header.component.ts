import { Component } from "@angular/core";

@Component({
  selector: "gospel-page-header",
  imports: [],
  template: `
    <div class="header-container">
      <ng-content select="h1"></ng-content>
      <div class="divider">|</div>
      <ng-content select="h2"></ng-content>
    </div>
  `,
  styles: `.header-container {
    display: flex; flex-direction: row; align-items: baseline
  }
  .divider {
    margin-bottom: 16px; margin-top: 8px; padding: 0px 16px; font-size: 24px; font-weight: 300;
  }
  `,
})
export class PageHeaderComponent {}
