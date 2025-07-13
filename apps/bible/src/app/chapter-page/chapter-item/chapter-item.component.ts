import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { Chapter } from "../../models/chapters";

@Component({
  selector: "app-chapter-item",
  imports: [CommonModule, MatCardModule, MatRippleModule],
  templateUrl: "./chapter-item.component.html",
  styleUrl: "./chapter-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChapterItemComponent {
  @Input() public item: Chapter;
  @Output() public chapterClicked = new EventEmitter();
}
