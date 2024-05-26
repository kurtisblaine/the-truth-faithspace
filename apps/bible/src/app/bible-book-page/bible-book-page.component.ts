import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from "@angular/core";
import { BibleBook } from "../+state/models/bibles";

@Component({
  selector: "app-bible-book-page",
  standalone: true,
  imports: [],
  templateUrl: "./bible-book-page.component.html",
  styleUrl: "./bible-book-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BibleBookPageComponent implements OnInit {
  @Input() public book: BibleBook;

  ngOnInit() {}
}
