import { CommonModule, CurrencyPipe, isPlatformBrowser, NgOptimizedImage } from "@angular/common";
import {
  afterNextRender,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  PLATFORM_ID,
  Signal,
  signal,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatStepper, MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Store } from "@ngrx/store";
import {
  ICancelCallbackData,
  IClientAuthorizeCallbackData,
  ICreateOrderRequest,
  IOnApproveCallbackActions,
  IOnApproveCallbackData,
  IOnClickCallbackActions,
  IPayPalConfig,
  ITransactionItem,
  NgxPayPalModule,
} from "ngx-paypal";
import { Observable, tap } from "rxjs";
import { CartProduct } from "../+state/products/products.models";
import { selectCartProducts, selectCartTotal } from "../+state/products/products.selectors";
import { PaymentConfirmationComponent } from "./payment-confirmation.component";

@Component({
  selector: "app-checkout-page",
  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatStepperModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule,
    CommonModule,
    NgOptimizedImage,
    FontAwesomeModule,
    NgxPayPalModule,
  ],
  templateUrl: "./checkoutPage.component.html",
  styleUrl: "./checkoutPage.component.scss",
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CheckoutPageComponent implements OnInit, AfterViewInit {
  private readonly fb = inject(FormBuilder);
  private readonly dialog = inject(MatDialog);
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly changeDetection = inject(ChangeDetectorRef);
  private readonly platformId = inject(PLATFORM_ID);

  @ViewChild("stepper") public matStepper!: MatStepper;

  contactForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
  });

  public paypalConfig!: IPayPalConfig;
  public isPlatformBrowser = isPlatformBrowser(this.platformId);

  public cartProducts: Signal<CartProduct[]>;
  public total$: Observable<number>;
  public total: number;

  public isCustomerDetailsEntered = signal(false);

  constructor() {
    afterNextRender(() => {
      const savedData = localStorage.getItem("flaresOfGloryPersonalInformation");
      if (savedData) {
        this.contactForm.patchValue(JSON.parse(savedData));
        !this.contactForm.errors ? this.matStepper.next() : null;
        this.changeDetection.markForCheck();
      }

      this.paypalConfig = {
        currency: "USD",
        clientId: "ATBsnevpyAGuaebwGBk6tEFC5nCV0ZiElxyq9vBTLNnIzDAgHq5hDMxAUw7yf217dYl3HJPyxRwJnIV9",
        createOrderOnClient: this.createOrder.bind(this),
        advanced: {
          commit: "true",
        },
        style: {
          label: "paypal",
          layout: "vertical",
        },
        onApprove: (data: IOnApproveCallbackData, actions: IOnApproveCallbackActions) => {
          console.log("onApprove - transaction was approved, but not authorized", data, actions);
          actions.order.get().then((details) => {
            console.log("onApprove - you can get full order details inside onApprove: ", details);
          });
        },
        onClientAuthorization: (data: IClientAuthorizeCallbackData) => {
          console.log(
            "onClientAuthorization - you should probably inform your server about completed transaction at this point",
            data
          );
          this.dialog.open(PaymentConfirmationComponent, { data: { type: "success", message: JSON.stringify(data) } });
        },
        onCancel: (data: ICancelCallbackData, actions: any) => {
          console.log("OnCancel", data, actions);
        },
        onError: (err) => {
          console.log("OnError", err);
          this.dialog.open(PaymentConfirmationComponent, { data: { type: "error", message: JSON.stringify(err) } });
        },
        onClick: (data, actions: IOnClickCallbackActions) => {
          console.log("onClick", data, actions);
        },
      };
    });
  }

  ngOnInit() {
    this.total$ = this.store.select(selectCartTotal).pipe(tap((r) => (this.total = r)));
    this.cartProducts = this.store.selectSignal(selectCartProducts);
  }

  ngAfterViewInit(): void {}

  createOrder = (data) => {
    const cartProducts = this.cartProducts();
    const pricedProducts = cartProducts.map((product) => {
      return {
        name: product.name,
        quantity: product.count.toString(),
        unit_amount: { value: product.price.toString(), currency_code: "USD" },
        description: product.description,
        category: "PHYSICAL_GOODS",
      } as ITransactionItem;
    });

    return {
      intent: "CAPTURE",
      purchase_units: [
        {
          amount: {
            currency_code: "USD",
            value: this.total.toString(),
            breakdown: {
              item_total: {
                currency_code: "USD",
                value: this.total.toString(),
              },
            },
          },
          items: pricedProducts,
        },
      ],
    } as ICreateOrderRequest;
  };

  saveAddress() {
    localStorage.setItem("flaresOfGloryPersonalInformation", JSON.stringify(this.contactForm.value));
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
}
