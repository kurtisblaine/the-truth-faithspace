import { BreakpointObserver } from "@angular/cdk/layout";
import {
  STEPPER_GLOBAL_OPTIONS,
  StepperOptions,
  StepperOrientation,
  StepperSelectionEvent,
} from "@angular/cdk/stepper";
import { CommonModule } from "@angular/common";
import {
  AfterViewInit,
  Component,
  effect,
  inject,
  Injector,
  OnDestroy,
  OnInit,
  signal,
  Signal,
  ViewChild,
} from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { Router, RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { map } from "rxjs";
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
  public stepperOrientation: Signal<StepperOrientation> = signal("horizontal");

  private injector = inject(Injector);
  @ViewChild("stepper") stepper!: MatStepper;

  public selectedLanguage!: Signal<string>;
  public selectedTranslation!: Signal<Bible>;
  public selectedBook!: Signal<Book>;
  public selectedChapter!: Signal<string>;

  constructor(
    private router: Router,
    public stepperService: StepperStateService,
    private store: Store,
    private breakpointObserver: BreakpointObserver
  ) {
    this.stepperOrientation = toSignal(
      this.breakpointObserver
        .observe("(min-width: 800px)")
        .pipe(map(({ matches }) => (matches ? "horizontal" : "vertical")))
    );
  }

  ngOnInit() {
    this.selectedLanguage = this.store.selectSignal(selectSelectedLanguage);
    this.selectedTranslation = this.store.selectSignal(selectSelectedTranslation);
    this.selectedBook = this.store.selectSignal(selectCurrentBook);
    this.selectedChapter = this.store.selectSignal(selectChapter);
  }

  ngAfterViewInit() {
    this.stepperService.init(this.stepper);

    effect(
      () => {
        // if (this.selectedLanguage() && this.selectedTranslation() && this.selectedBook() && this.selectedChapter()) {
        //   this.stepper.selectedIndex = 4;
        //   this._setStepsActive(4);
        // } else if (this.selectedLanguage() && this.selectedTranslation() && this.selectedBook()) {
        //   this.stepper.selectedIndex = 3;
        //   this._setStepsActive(3);
        // } else if (this.selectedLanguage() && this.selectedTranslation()) {
        //   this.stepper.selectedIndex = 2;
        //   this._setStepsActive(2);
        // } else if (this.selectedLanguage()) {
        //   this.stepper.selectedIndex = 1;
        //   this._setStepsActive(1);
        // } else {
        //   this.stepper.selectedIndex = 0;
        //   this._setStepsActive(0);
        // }
      },
      { injector: this.injector }
    );
  }

  ngOnDestroy(): void {}

  onSelectionChange(event: StepperSelectionEvent, isFiredFromEvent: boolean): void {
    if (!isFiredFromEvent) return;

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
