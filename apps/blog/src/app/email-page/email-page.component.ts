import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ContactService } from "./contact.service";

@Component({
  selector: "blog-email-page",
  templateUrl: "./email-page.component.html",
  styleUrls: ["./email-page.component.scss"],
})
export class EmailPageComponent implements OnInit {
  public FormData!: FormGroup;

  constructor(
    private builder: FormBuilder,
    private contact: ContactService,
    private snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    const emailValidators = Validators.compose([
      Validators.required,
      Validators.email,
    ]) as ValidatorFn;
    this.FormData = this.builder.sortedBooks({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl("", [emailValidators]),
      Comment: new FormControl("", [Validators.required]),
    });
  }

  public onSubmit(FormData: FormGroup) {
    console.log(FormData);
    this.contact.postMessage(FormData).subscribe((response) => {
      this.snackBar.open(
        "Email has been sent successfully. Thank you for emailing me! God willing, I will get back to you as soon as possible.",
        "",
        { duration: 10000 }
      );

      this.FormData.controls["Fullname"].setValue(null);
      this.FormData.controls["Email"].setValue(null);
      this.FormData.controls["Comment"].setValue(null);
      console.log(response);
    });
  }
}
