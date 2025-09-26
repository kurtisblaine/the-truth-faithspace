import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PaymentService {
  private static readonly BASE_URL = "https://i-really-dont-want-a-server:4200";

  constructor(private readonly http: HttpClient) {}
}
