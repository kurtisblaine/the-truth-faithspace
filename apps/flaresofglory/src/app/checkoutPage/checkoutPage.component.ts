import { CommonModule, CurrencyPipe, NgOptimizedImage } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, signal, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Store } from "@ngrx/store";
import { StripeCardElementOptions, StripeElementsOptions } from "@stripe/stripe-js";
import { injectStripe, StripeCardComponent, StripeElementsDirective, StripePaymentElementComponent } from "ngx-stripe";
import { Observable, tap } from "rxjs";
import { CartProduct } from "../+state/products/products.models";
import { selectCartProducts, selectCartTotal } from "../+state/products/products.selectors";
import { PaymentConfirmationComponent } from "./payment-confirmation.component";
import { PaymentService, STRIPE_PUBLIC_KEY } from "./payment.service";

@Component({
  selector: "app-checkout-page",
  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatStepperModule,
    MatInputModule,
    MatToolbarModule,
    StripePaymentElementComponent,
    StripeElementsDirective,
    MatListModule,
    CommonModule,
    NgOptimizedImage,
    FontAwesomeModule,
    MatDividerModule,
    StripeCardComponent,
  ],
  templateUrl: "./checkoutPage.component.html",
  styleUrl: "./checkoutPage.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPageComponent {
  @ViewChild(StripePaymentElementComponent)
  public paymentElement!: StripePaymentElementComponent;

  public cartProducts$: Observable<CartProduct[]>;

  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: "#666EE8",
        color: "#31325F",
        fontWeight: 300,
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: "18px",
        "::placeholder": {
          color: "#CFD7E0",
        },
      },
    },
  };

  private readonly fb = inject(FormBuilder);
  private readonly dialog = inject(MatDialog);
  private readonly paymentService = inject(PaymentService);
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  readonly stripe = injectStripe(STRIPE_PUBLIC_KEY);

  checkoutForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required]],
    address: ["", [Validators.required]],
    address2: ["", []],
    zipcode: ["", [Validators.required]],
    city: ["", [Validators.required]],
    state: ["", [Validators.required]],
    amount: [0, [Validators.required, Validators.pattern(/\d+/)]],
  });

  public elementsOptions: StripeElementsOptions = {
    locale: "en",
    appearance: {
      theme: "stripe",
      labels: "floating",
      variables: {
        colorPrimary: "#673ab7",
      },
    },
    clientSecret: "123",
  };

  public total$: Observable<number>;
  public total: number;

  public paying = signal(false);
  public isCustomerDetailsEntered = signal(false);

  get amount() {
    const amountValue = this.checkoutForm.get("amount")?.value;
    if (!amountValue || amountValue < 0) return 0;

    return Number(amountValue) / 100;
  }

  ngOnInit() {
    this.total$ = this.store.select(selectCartTotal).pipe(tap((r) => (this.total = r)));
    const amount = this.checkoutForm.get("amount")?.value;
    this.cartProducts$ = this.store.select(selectCartProducts);

    // this.paymentService
    //   .createPaymentIntent({
    //     amount,
    //     currency: "eur",
    //   })
    //   .subscribe((pi) => {
    //     this.elementsOptions.clientSecret = pi.client_secret as string;
    //   });
  }

  clear() {
    this.checkoutForm.patchValue({
      name: "",
      email: "",
      address: "",
      address2: "",
      zipcode: "",
      city: "",
      state: "",
    });
  }

  public goCart() {
    this.router.navigateByUrl("cart").then(() => {});
  }

  public calculateShippingCosts() {
    return 0;
  }

  public calculateSalesTax() {
    return 0;
  }

  public calculateTotalCosts() {
    return 0;
  }

  collectPayment() {
    if (this.paying() || this.checkoutForm.invalid) return;
    this.paying.set(true);

    const { name, email, address, zipcode, city } = this.checkoutForm.getRawValue();

    this.stripe
      .confirmPayment({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: name as string,
              email: email as string,
              address: {
                line1: address as string,
                postal_code: zipcode as string,
                city: city as string,
              },
            },
          },
        },
        redirect: "if_required",
      })
      .subscribe({
        next: (result) => {
          this.paying.set(false);
          if (result.error) {
            this.dialog.open(PaymentConfirmationComponent, {
              data: {
                type: "error",
                message: result.error.message,
              },
            });
          } else if (result.paymentIntent.status === "succeeded") {
            this.dialog.open(PaymentConfirmationComponent, {
              data: {
                type: "success",
                message: "Payment processed successfully",
              },
            });
          }
        },
        error: (err) => {
          this.paying.set(false);
          this.dialog.open(PaymentConfirmationComponent, {
            data: {
              type: "error",
              message: err.message || "Unknown Error",
            },
          });
        },
      });
  }
}
