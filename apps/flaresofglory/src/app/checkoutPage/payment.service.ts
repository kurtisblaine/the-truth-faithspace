import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { PaymentIntent } from "@stripe/stripe-js";

export const STRIPE_PUBLIC_KEY =
  "pk_test_51SAv680V7217IH4r8BpUGuTB1ORM3iVNlqr7Nd2C58R1XnrVodusscCTAAymp2EA1feLbQl6SlcAiQB7r5KuEF0v00C0tmPWOz";

@Injectable({ providedIn: "root" })
export class PaymentService {
  private static readonly BASE_URL = "https://i-really-dont-want-a-server:4200";

  constructor(private readonly http: HttpClient) {}

  createPaymentIntent(params: any): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(`${PaymentService.BASE_URL}/payments/create-payment-intent`, params);
  }
}
