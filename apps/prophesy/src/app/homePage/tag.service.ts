import { effect, Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TagService {
  public reset = new BehaviorSubject<boolean>(false);
  public reset$ = this.reset.asObservable();

  public filteringOption = signal<"include" | "exclude">("include");
  public previousFilteringOption = signal<"include" | "exclude">("include");

  constructor() {
    effect(() => {
      this.previousFilteringOption.set(this.filteringOption());
    });
  }
}
