import { HttpClient } from "@angular/common/http";
import { Inject, Injectable, InjectionToken } from "@angular/core";
import { Observable } from "rxjs";

import { PaymentIntent } from "@stripe/stripe-js";

export const PLUTO_ID = new InjectionToken<string>("[PLUTO] ClientID");

export const STRIPE_PUBLIC_KEY =
  "pk_test_51SAv680V7217IH4r8BpUGuTB1ORM3iVNlqr7Nd2C58R1XnrVodusscCTAAymp2EA1feLbQl6SlcAiQB7r5KuEF0v00C0tmPWOz";

@Injectable({ providedIn: "root" })
export class PaymentService {
  private static readonly BASE_URL = "https://api.pluto.ricardosanchez.dev/api";

  constructor(@Inject(PLUTO_ID) private readonly clientId: string, private readonly http: HttpClient) {}

  createPaymentIntent(params: any): Observable<PaymentIntent> {
    return this.http.post<PaymentIntent>(`${PaymentService.BASE_URL}/payments/create-payment-intent`, params, {
      headers: { merchant: this.clientId },
    });
  }
}
