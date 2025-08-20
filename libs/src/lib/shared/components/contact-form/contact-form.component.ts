import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, input, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { ContactService } from "./contact.service";

@Component({
  selector: "lib-contact-form",
  imports: [
    CommonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: "./contact-form.component.html",
  styleUrl: "./contact-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent implements OnInit {
  public formSpreeApi = input.required<string>();

  public formData!: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService, private snackBar: MatSnackBar) {}

  public ngOnInit(): void {
    const emailValidators = Validators.compose([Validators.required, Validators.email]) as ValidatorFn;
    this.formData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl("", [emailValidators]),
      Comment: new FormControl("", [Validators.required]),
    });
  }

  public onSubmit(formData: FormGroup) {
    console.log(formData);
    this.contact.postMessage(formData).subscribe((response) => {
      this.snackBar.open(
        "Email has been sent successfully. Thank you for emailing me! God willing, I will get back to you as soon as possible.",
        "",
        { duration: 10000 }
      );

      this.formData.controls["Fullname"].setValue(null);
      this.formData.controls["Email"].setValue(null);
      this.formData.controls["Comment"].setValue(null);
      console.log(response);
    });
  }
}
