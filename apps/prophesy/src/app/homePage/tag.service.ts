import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TagService {
  public reset = new BehaviorSubject<boolean>(false);
  public reset$ = this.reset.asObservable();

  constructor() {}
}
