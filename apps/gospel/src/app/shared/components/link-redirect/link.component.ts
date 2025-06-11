import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "blog-link",
  template: `(<a href="{{ link }}" target="_blank">{{ title }}</a
    >)`,
  styles: ``,
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public title = "See more";
  @Input() public link: string;
}
