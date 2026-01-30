import { BreakpointObserver } from "@angular/cdk/layout";
import {
  STEPPER_GLOBAL_OPTIONS,
  StepperOptions,
  StepperOrientation,
  StepperSelectionEvent,
} from "@angular/cdk/stepper";
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { Router, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable, tap } from "rxjs";
import { selectSelectedLanguage, selectSelectedTranslation } from "./+state/bibles/bibles.selectors";
import { selectCurrentBook } from "./+state/books/books.selectors";
import { selectChapter } from "./+state/chapters/chapters.selectors";
import { StepperStateService } from "./stepperState.service";

@Component({
  imports: [
    RouterModule,
    CommonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  selector: "app-root",
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true, displayDefaultIndicatorType: false } as StepperOptions,
    },
  ],
  templateUrl: "./app.component.html",
  styles: `.stepper {
    position: sticky; width: 100%; top: 0; z-index: 7777;;
  }`,
})
export class AppComponent implements OnInit, AfterViewInit {
  public stepperOrientation$: Observable<StepperOrientation>;

  @ViewChild("stepper") stepper!: MatStepper;

  public selectedLanguage$!: Observable<string>;
  private _selectedLanguageId: string;
  public selectedTranslation$!: Observable<string>;
  private _selectedTranslationId!: string;
  public selectedBook$!: Observable<string>;
  private _selectedBookId!: string;
  public selectedChapter$!: Observable<string>;

  ngAfterViewInit() {
    this.stepperService.init(this.stepper);
  }

  constructor(
    private router: Router,
    private stepperService: StepperStateService,
    private store: Store,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {
    this.stepperOrientation$ = this.breakpointObserver
      .observe("(min-width: 800px)")
      .pipe(map(({ matches }) => (matches ? "horizontal" : "vertical")));

    this.selectedLanguage$ = this.store
      .select(selectSelectedLanguage)
      .pipe(tap((language) => (this._selectedLanguageId = language)));
    this.selectedTranslation$ = this.store.select(selectSelectedTranslation).pipe(
      tap((translation) => (this._selectedTranslationId = translation?.id)),
      map((translation) => translation?.name)
    );
    this.selectedBook$ = this.store.select(selectCurrentBook).pipe(
      tap((book) => (this._selectedBookId = book?.id)),
      map((book) => book?.name)
    );
    this.selectedChapter$ = this.store.select(selectChapter);

    this.router.navigate([""]); //go to home on refresh.
  }

  onSelectionChange(event: StepperSelectionEvent): void {
    switch (event.selectedIndex) {
      case 0:
        this.router.navigateByUrl("/");
        break;
      case 1:
        this.router.navigateByUrl(`/tongue/${this._selectedLanguageId}`);
        break;
      case 2:
        this.router.navigateByUrl(`/tongue/${this._selectedLanguageId}/bible/${this._selectedTranslationId}`);
        break;
      case 3:
        this.router.navigateByUrl(
          `/tongue/${this._selectedLanguageId}/bible/${this._selectedTranslationId}/book/${this._selectedBookId}`
        );
        break;
    }
  }
}
