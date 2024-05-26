import { CommonModule } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Input as RouteInput,
} from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { getBibleByLanguageName } from "../+state/bibles/bibles.selectors";
import { Bible } from "../+state/models/bibles";

@Component({
  selector: "app-bible-page",
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: "./bible-page.component.html",
  styleUrl: "./bible-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiblePageComponent implements OnInit {
  @RouteInput() public languageId: string;
  public selectedBiblesByLanguage$!: Observable<Bible[]>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.selectedBiblesByLanguage$ = this.store.select(
      getBibleByLanguageName(this.languageId)
    );
  }

  public readBook(bible: Bible) {
    this.router.navigateByUrl(
      "tongue/" + this.languageId + "/bible/" + bible.id
    );
  }
}
