import { Injectable } from "@angular/core";
import { MatStepper } from "@angular/material/stepper";
import { cloneDeep } from "lodash-es";

@Injectable({
  providedIn: "root",
})
export class StepperStateService {
  public stepper!: MatStepper;
  public selectedIndex = 0;

  init(stepper: MatStepper) {
    this.stepper = stepper;
  }

  goToNextStep() {
    const currentStep = cloneDeep(this.stepper.selectedIndex);
    this.selectedIndex = currentStep + 1;
    this.stepper.next();
    this._setStepsActive(this.selectedIndex);
  }

  goToPreviousStep() {
    const currentStep = cloneDeep(this.stepper.selectedIndex);
    this.selectedIndex = currentStep - 1;
    this.stepper.previous();
  }

  private _setStepsActive(index: number) {
    const steps = Array.from(this.stepper.steps);
    steps.forEach((step, i) => {
      if (i <= index) {
        step.completed = true;
        step.editable = true;
      } else {
        step.completed = false;
        step.editable = false;
      }
    });
  }
}
