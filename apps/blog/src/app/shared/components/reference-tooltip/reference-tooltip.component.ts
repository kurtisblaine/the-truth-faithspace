import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";

@Component({
  selector: "blog-reference-tooltip",
  templateUrl: "./reference-tooltip.component.html",
  styleUrls: ["./reference-tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReferenceTooltipComponent implements OnInit {
  @Input() public reference!: string;
  @Input() public isJesusWord = false;

  constructor() {}

  public ngOnInit(): void {}
}
