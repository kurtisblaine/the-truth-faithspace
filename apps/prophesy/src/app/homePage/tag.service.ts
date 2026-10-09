import { Injectable, OnDestroy } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Tag } from "../+state/items/items.models";

@Injectable({
  providedIn: "root",
})
export class TagService implements OnDestroy {
  public reset = new BehaviorSubject<boolean>(false);
  public reset$ = this.reset.asObservable();

  public tagGroupSignalMap = new Map<string, BehaviorSubject<Tag[]>>();

  constructor() {}

  init(key: string, filterSignaler: BehaviorSubject<Tag[]>) {
    this.tagGroupSignalMap.set(key, filterSignaler);
    return filterSignaler;
  }

  ngOnDestroy(): void {
    this.tagGroupSignalMap.clear();
  }
}
