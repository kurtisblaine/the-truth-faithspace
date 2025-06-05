import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { flatMap } from "lodash-es";
import { SharedLibraryModule } from "shared";
import { selectLanguage } from "../../+state/bibles/bibles.actions";
import { Bible, ScriptDirection, SortedBibles } from "../../models/bibles";

@Component({
  selector: "app-language-item",
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, SharedLibraryModule, MatRippleModule],
  templateUrl: "./language-item.component.html",
  styleUrl: "./language-item.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageItemComponent {
  @Input() public item: SortedBibles;
  constructor(private store: Store, private router: Router) {}

  public rtl: ScriptDirection = "RTL";

  public getCountries(sortedBibles: Bible[]) {
    const flattened = flatMap(sortedBibles, (g) => g.countries);
    const dedupped = [...new Set(flattened.map((f) => f.name))];
    return dedupped.join(", ");
  }

  public getScripts(sortedBibles: Bible[]) {
    const flattened = flatMap(sortedBibles, (g) => g.language);
    const dedupped = [...new Set(flattened.map((f) => f.script))];
    return dedupped.join(", ");
  }

  public showBibles(bibles: Bible[]) {
    this.store.dispatch(selectLanguage({ bible: bibles[0] }));
    this.router.navigateByUrl("tongue/" + bibles[0].language.name);
  }
}
