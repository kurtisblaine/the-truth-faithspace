// stepper-state.service.ts
import { Injectable } from "@angular/core";
import { MatStepper } from "@angular/material/stepper";
import { cloneDeep } from "lodash-es";

@Injectable({
  providedIn: "root",
})
export class StepperStateService {
  public stepper!: MatStepper;

  init(stepper: MatStepper) {
    this.stepper = stepper;
  }

  goToNextStep() {
    const currentStep = cloneDeep(this.stepper.selectedIndex);
    this.stepper.next();
    this.stepper.selectedIndex = currentStep + 1;
  }

  goToPreviousStep() {
    const currentStep = cloneDeep(this.stepper.selectedIndex);
    this.stepper.previous();
    this.stepper.selectedIndex = currentStep - 1;
  }
}
