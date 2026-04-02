import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "lib-link",
  template: `
    <a
      href="{{ link }}"
      [target]="getTarget()"
      rel="noopener"
      [ngStyle]="{ 'text-decoration': isNewPage ? 'underline' : 'none' }"
    >
      <ng-content></ng-content>
    </a>
  `,
  styles: ``,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public link!: string;
  @Input() public isNewPage = true;

  getTarget(): string {
    return this.isNewPage ? "_blank" : "_self";
  }
}
