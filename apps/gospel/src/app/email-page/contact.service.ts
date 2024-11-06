import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  public api = "https://formspree.io/f/mzbnezkd";

  constructor(private http: HttpClient) {}

  public postMessage(input: any) {
    return this.http.post(this.api, input, { responseType: "text" }).pipe(
      map((response: any) => {
        if (response) {
          return response;
        }
      })
    );
  }
}
