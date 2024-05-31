import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import * as _ from "lodash-es";
import { Observable, map } from "rxjs";
import { SharedModule } from "shared";
import { initBible } from "../+state/bibles/bibles.actions";
import {
  selectAllGroupedLanguages,
  selectBiblesLoaded,
} from "../+state/bibles/bibles.selectors";
import { Bible, ScriptDirection, SortedBibles } from "../models/bibles";

@Component({
  selector: "app-language-page",
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    SharedModule,
    MatInputModule,
  ],
  templateUrl: "./language-page.component.html",
  styleUrl: "./language-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagePageComponent {
  public rtl: ScriptDirection = "RTL";
  public groups$!: Observable<SortedBibles[]>;
  public isLoading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    this.store.dispatch(initBible());

    this.groups$ = this.store.select(selectAllGroupedLanguages);
    this.isLoading$ = this.store
      .select(selectBiblesLoaded)
      .pipe(map((r) => !r));
  }

  public getCountries(sortedBibles: Bible[]) {
    const flattened = _.flatMap(sortedBibles, (g) => g.countries);
    const dedupped = [...new Set(flattened.map((f) => f.name))];
    return dedupped.join(", ");
  }

  public getScripts(sortedBibles: Bible[]) {
    const flattened = _.flatMap(sortedBibles, (g) => g.language);
    const dedupped = [...new Set(flattened.map((f) => f.script))];
    return dedupped.join(", ");
  }

  public showBibles(bibles: Bible[]) {
    this.router.navigateByUrl("tongue/" + bibles[0].language.name);
  }
}
