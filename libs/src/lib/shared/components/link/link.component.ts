import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "lib-link",
  template: ` <a href="{{ link }}" [target]="getTarget()"><ng-content></ng-content></a> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public link!: string;
  @Input() public shouldOpenNewPage = true;

  getTarget(): string {
    return this.shouldOpenNewPage ? "_blank" : "_self";
  }
}
