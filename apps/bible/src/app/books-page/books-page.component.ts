import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-books-page",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./books-page.component.html",
  styleUrl: "./books-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksPageComponent {}
