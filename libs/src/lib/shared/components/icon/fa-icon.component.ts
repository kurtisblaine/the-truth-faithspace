import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, computed, inject, input, ViewEncapsulation } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

@Component({
  selector: "lib-fa-icon",
  imports: [CommonModule],
  template: ``,
  host: {
    "[innerHTML]": "iconHtml()",
  },
  styles: `
    .svg-inline--fa {
      display: inline-block;
      height: 1em;
      overflow: visible;
      vertical-align: -0.125em;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LibFaIconComponent {
  icon = input.required<IconDefinition>();
  iconHtml = computed(() => this._createIconHtml(this.icon()));

  private readonly _sanitizer = inject(DomSanitizer);

  private _createIconHtml(faIcon: IconDefinition): SafeHtml {
    const [width, height, , , svgPathData] = faIcon.icon;

    const iconHtml = `
    <svg aria-hidden="true" focusable="false" class="svg-inline--fa" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg" role="img">
      <path fill="currentColor" d="${svgPathData}" />
    </svg>
    `;

    return this._sanitizer.bypassSecurityTrustHtml(iconHtml);
  }
}
