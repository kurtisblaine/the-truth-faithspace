// stepper-state.service.ts
import { Injectable } from "@angular/core";
import { MatStepper } from "@angular/material/stepper";

@Injectable({
  providedIn: "root",
})
export class StepperStateService {
  public stepper!: MatStepper;

  init(stepper: MatStepper) {
    this.stepper = stepper;
  }

  goToNextStep() {
    this.stepper.next();
  }

  goToPreviousStep() {
    this.stepper.previous();
  }
}
