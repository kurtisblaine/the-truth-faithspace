import { BreakpointObserver } from "@angular/cdk/layout";
import {
  STEPPER_GLOBAL_OPTIONS,
  StepperOptions,
  StepperOrientation,
  StepperSelectionEvent,
} from "@angular/cdk/stepper";
import { CommonModule } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit, Signal, ViewChild } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { Router, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import * as BiblesActions from "./+state/bibles/bibles.actions";
import { selectSelectedLanguage, selectSelectedTranslation } from "./+state/bibles/bibles.selectors";
import { selectCurrentBook } from "./+state/books/books.selectors";
import { selectChapter } from "./+state/chapters/chapters.selectors";
import { Bible } from "./models/bibles";
import { Book } from "./models/books";
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
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  public stepperOrientation$!: Observable<StepperOrientation>;

  @ViewChild("stepper") stepper!: MatStepper;

  public selectedLanguage!: Signal<string>;
  public selectedTranslation!: Signal<Bible>;
  public selectedBook!: Signal<Book>;
  public selectedChapter!: Signal<string>;

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

    this.selectedLanguage = this.store.selectSignal(selectSelectedLanguage);
    this.selectedTranslation = this.store.selectSignal(selectSelectedTranslation);
    this.selectedBook = this.store.selectSignal(selectCurrentBook);
    this.selectedChapter = this.store.selectSignal(selectChapter);
  }

  ngAfterViewInit() {
    this.stepperService.init(this.stepper);
  }

  ngOnDestroy(): void {}

  onSelectionChange(event: StepperSelectionEvent): void {
    switch (event.selectedIndex) {
      case 0:
        this.router.navigateByUrl("/");
        break;
      case 1:
        this.router.navigateByUrl(`/tongue/${this.selectedLanguage()}`);
        this.store.dispatch(BiblesActions.loadBibles()); //although the data is already retrieved on initialization, we want to know when the bibles are navigated to.
        break;
      case 2:
        this.router.navigateByUrl(`/tongue/${this.selectedLanguage()}/bible/${this.selectedTranslation()?.id}`);
        break;
      case 3:
        this.router.navigateByUrl(
          `/tongue/${this.selectedLanguage()}/bible/${this.selectedTranslation()?.id}/book/${this.selectedBook()?.id}`
        );
        break;
    }
  }
}
