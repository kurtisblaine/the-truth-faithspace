import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { ContactService } from "./contact.service";

@Component({
  selector: "blog-email-page",
  templateUrl: "./email-page.component.html",
  styleUrls: ["./email-page.component.scss"],
})
export class EmailPageComponent implements OnInit {
  public FormData!: FormGroup;

  constructor(private builder: FormBuilder, private contact: ContactService) {}

  public ngOnInit(): void {
    const emailValidators = Validators.compose([
      Validators.required,
      Validators.email,
    ]) as ValidatorFn;
    this.FormData = this.builder.group({
      Fullname: new FormControl("", [Validators.required]),
      Email: new FormControl("", [emailValidators]),
      Comment: new FormControl("", [Validators.required]),
    });
  }

  public onSubmit(FormData: FormGroup) {
    console.log(FormData);
    this.contact.postMessage(FormData).subscribe((response) => {
      location.href = "https://mailthis.to/confirm";
      console.log(response);
    });
  }
}
