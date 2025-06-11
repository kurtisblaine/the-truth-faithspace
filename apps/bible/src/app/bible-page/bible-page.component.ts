import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnInit, Input as RouteInput } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { TooltipDirective } from "shared";
import { selectTranslation } from "../+state/bibles/bibles.actions";
import { getBibleByLanguageName } from "../+state/bibles/bibles.selectors";
import { Bible } from "../models/bibles";

@Component({
  selector: "app-bible-page",
  standalone: true,
  imports: [CommonModule, MatListModule, TooltipDirective],
  templateUrl: "./bible-page.component.html",
  styleUrl: "./bible-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BiblePageComponent implements OnInit {
  @RouteInput() public languageName: string;
  public selectedBiblesByLanguage$!: Observable<Bible[]>;
  public selectedLanguage$!: Observable<string>;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.selectedBiblesByLanguage$ = this.store.select(getBibleByLanguageName(this.languageName));
  }

  public readBook(bible: Bible) {
    this.store.dispatch(selectTranslation({ bible: bible }));

    this.router.navigateByUrl("tongue/" + this.languageName + "/bible/" + bible.id);
  }
}
