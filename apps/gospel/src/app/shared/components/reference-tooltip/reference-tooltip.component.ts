import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, HostBinding, Input, OnInit } from "@angular/core";

@Component({
  selector: "blog-reference-tooltip",
  templateUrl: "./reference-tooltip.component.html",
  styleUrls: ["./reference-tooltip.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class ReferenceTooltipComponent implements OnInit {
  @Input() public reference!: string;
  @Input() public isJesusWord = false;
  @Input() public flex = false;

  @HostBinding("style.padding")
  @Input()
  public padding = "";

  constructor() {}

  public ngOnInit(): void {}
}
