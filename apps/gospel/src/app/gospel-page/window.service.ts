import { isPlatformBrowser, isPlatformServer } from "@angular/common";
import { Inject, Injectable, PLATFORM_ID } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class WindowService {
  get nativeWindow(): Window | undefined {
    return isPlatformBrowser(this.platformId) ? window : undefined;
  }

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    console.log("isPlatformBrowser: " + isPlatformBrowser(this.platformId));
    console.log("isPlatformServer: " + isPlatformServer(this.platformId));
  }
}
