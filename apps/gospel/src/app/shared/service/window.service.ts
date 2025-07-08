import { isPlatformBrowser } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WindowService {
  get nativeWindow(): Window | undefined {
    return isPlatformBrowser(this.platformId) ? window : undefined;
  }

  get localStorage(): Storage | undefined {
    return isPlatformBrowser(this.platformId) ? localStorage : undefined;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}
}
