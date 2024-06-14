import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable, map } from "rxjs";
import { initBible } from "../+state/bibles/bibles.actions";
import { getEnglishGroup, selectAllGroupedLanguages, selectBiblesLoaded } from "../+state/bibles/bibles.selectors";
import { SortedBibles } from "../models/bibles";
import { LanguageItemComponent } from "./language-item/language-item.component";

@Component({
  selector: "app-language-page",
  standalone: true,
  imports: [
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatInputModule,
    LanguageItemComponent,
  ],
  templateUrl: "./language-page.component.html",
  styleUrl: "./language-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguagePageComponent {
  public groups$!: Observable<SortedBibles[]>;
  public english$!: Observable<SortedBibles>;
  public isLoading$!: Observable<boolean>;

  constructor(private store: Store, private router: Router) {}

  public ngOnInit() {
    this.store.dispatch(initBible());

    this.groups$ = this.store.select(selectAllGroupedLanguages);
    this.english$ = this.store.select(getEnglishGroup);
    this.isLoading$ = this.store.select(selectBiblesLoaded).pipe(map((r) => !r));
  }
}
