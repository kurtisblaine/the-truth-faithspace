import { CommonModule, CurrencyPipe, isPlatformBrowser, NgOptimizedImage } from "@angular/common";
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  PLATFORM_ID,
  signal,
  ViewChild,
} from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
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
import {
  ICancelCallbackData,
  IClientAuthorizeCallbackData,
  ICreateOrderRequest,
  IOnApproveCallbackActions,
  IOnApproveCallbackData,
  IOnClickCallbackActions,
  IPayPalConfig,
  NgxPayPalModule,
} from "ngx-paypal";
import { Observable, tap } from "rxjs";
import { CartProduct } from "../+state/products/products.models";
import { selectCartProducts, selectCartTotal } from "../+state/products/products.selectors";
import { PaymentService } from "./payment.service";

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
    MatListModule,
    CommonModule,
    NgOptimizedImage,
    FontAwesomeModule,
    MatDividerModule,
    MatAutocompleteModule,
    NgxPayPalModule,
  ],
  templateUrl: "./checkoutPage.component.html",
  styleUrl: "./checkoutPage.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckoutPageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly dialog = inject(MatDialog);
  private readonly paymentService = inject(PaymentService);
  private readonly store = inject(Store);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);

  checkoutForm: FormGroup = this.fb.group({
    name: ["", [Validators.required]],
    email: ["", [Validators.required, Validators.email]],
    address: ["", [Validators.required]],
    address2: ["", []],
    zipcode: ["", [Validators.required]],
    city: ["", [Validators.required]],
    state: ["", [Validators.required]],
    amount: [0, [Validators.required, Validators.pattern(/\d+/)]],
  });

  public paypalConfig!: IPayPalConfig;
  public isPlatformBrowser = isPlatformBrowser(this.platformId);

  @ViewChild("autocompleteInput") autocompleteInput: ElementRef<HTMLInputElement>;

  public cartProducts$: Observable<CartProduct[]>;
  public total$: Observable<number>;
  public total: number;

  public paying = signal(false);
  public isCustomerDetailsEntered = signal(false);

  public states: string[] = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];
  public filteredStates: string[] = this.states;

  constructor() {
    afterNextRender(() => {
      const savedData = localStorage.getItem("flaresOfGloryAddressInformation");
      if (savedData) {
        this.checkoutForm.patchValue(JSON.parse(savedData));
      }

      this.paypalConfig = {
        currency: "usd",
        clientId: "Acu5NzWjbsV2kTqyoemCdBg83kY_tXg6jDZ5-xRD6Yg_Ml3ZTem7Zbb4wGRNHl63gVdL9IoEaux07f7t",
        createOrderOnClient: (data) =>
          <ICreateOrderRequest>{
            intent: "CAPTURE",
            purchase_units: [
              {
                amount: {
                  currency_code: "EUR",
                  value: "9.99",
                  breakdown: {
                    item_total: {
                      currency_code: "EUR",
                      value: "9.99",
                    },
                  },
                },
                items: [
                  {
                    name: "Enterprise Subscription",
                    quantity: "1",
                    category: "DIGITAL_GOODS",
                    unit_amount: {
                      currency_code: "EUR",
                      value: "9.99",
                    },
                  },
                ],
              },
            ],
          },
        advanced: {
          commit: "true",
        },
        style: {
          label: "paypal",
          tagline: true,
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
          // this.showSuccess = true;
        },
        onCancel: (data: ICancelCallbackData, actions: any) => {
          console.log("OnCancel", data, actions);
        },
        onError: (err) => {
          console.log("OnError", err);
        },
        onClick: (data, actions: IOnClickCallbackActions) => {
          console.log("onClick", data, actions);
        },
      };
    });
  }

  ngOnInit() {
    this.total$ = this.store.select(selectCartTotal).pipe(tap((r) => (this.total = r)));
    this.cartProducts$ = this.store.select(selectCartProducts);
  }

  saveAddress() {
    localStorage.setItem("flaresOfGloryAddressInformation", JSON.stringify(this.checkoutForm.value));
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
  }

  filter() {
    const filterValue = this.autocompleteInput.nativeElement.value.toLowerCase();
    this.filteredStates = this.states.filter((state) => state.toLowerCase().includes(filterValue));
  }
}
