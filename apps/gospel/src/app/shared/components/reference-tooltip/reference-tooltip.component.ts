import { ChangeDetectionStrategy, Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "blog-reference-tooltip",
  templateUrl: "./reference-tooltip.component.html",
  styleUrls: ["./reference-tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class ReferenceTooltipComponent implements OnInit {
  @Input() public reference!: string;
  @Input() public isJesusWord = false;
  @Input() public padding = "0px 30px";
  @Input() public flex = false;

  constructor() {}

  public ngOnInit(): void {}
}
