import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";
import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatStepperModule } from "@angular/material/stepper";
import { Router, RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule, CommonModule, MatStepperModule, FormsModule, ReactiveFormsModule, MatButtonModule],
  selector: "app-root",
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  templateUrl: "./app.component.html",
  styles: ``,
})
export class AppComponent implements OnInit {
  truth = this._formBuilder.group({
    language: ["", Validators.required],
    bible: ["", Validators.required],
    book: ["", Validators.required],
  });

  constructor(private _formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    // this.router.navigate([""]); //go to home on refresh.
  }

  goToLanguage() {
    this.router.navigateByUrl("translations");
  }
}
