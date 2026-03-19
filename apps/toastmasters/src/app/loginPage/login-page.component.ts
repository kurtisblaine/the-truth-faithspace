import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from "@angular/core";
import {} from "@angular/fire/auth";
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
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AuthService } from "shared";

@Component({
  selector: "app-login-page",
  imports: [
    CommonModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
  ],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent implements OnInit, OnDestroy {
  public formData!: FormGroup;
  private subscription!: Subscription;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  public ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe((user) => {
      if (user?.uid) {
        this.router.navigate(["/server/b3228e35-dbb3-4d66-b455-9b81d87d7d0f"]);
      }
    });

    const emailValidators = Validators.compose([Validators.required, Validators.email]) as ValidatorFn;
    this.formData = this.builder.group({
      Email: new FormControl("", [emailValidators]),
      Password: new FormControl("", [Validators.required]),
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  async onLogin(): Promise<void> {
    try {
      await this.authService.loginWithEmail(this.formData.get("Email")?.value, this.formData.get("Password")?.value);
      this.router.navigate(["/server/b3228e35-dbb3-4d66-b455-9b81d87d7d0f"]);
    } catch (error: any) {
      this.snackBar.open(error, "", {});
    } finally {
    }
  }

  async onGoogleLogin(): Promise<void> {
    try {
      await this.authService.loginWithGoogle();
    } catch (error: any) {
      this.snackBar.open(error, "", {});
    } finally {
    }
  }
}
