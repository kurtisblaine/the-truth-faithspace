import { ChangeDetectionStrategy, Component, Input } from "@angular/core";

@Component({
  selector: "blog-link",
  template: `(<a style="color: blue" href="link" target="_blank">{{ title }}</a
    >)`,
  styles: ``,
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent {
  @Input() public title = "Read More";
  @Input() public link: string;
}
