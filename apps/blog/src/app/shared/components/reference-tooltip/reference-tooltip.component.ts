import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
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
  @Input() public padding = "0px";
  @Input() public flex = false;

  constructor() {}

  public ngOnInit(): void {}
}
