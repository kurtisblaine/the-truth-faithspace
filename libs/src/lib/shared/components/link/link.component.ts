import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "lib-link",
  template: `<a href="{{ link }}" target="_blank"><ng-content></ng-content></a>`,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public link!: string;
}
