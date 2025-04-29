import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ApiSpeechService {
  constructor() {}

  ngOnDestroy(): void {
    this.stop("all");
  }

  start(text: string, componentId: string) {}

  speak(text: string, componentId: string) {}

  pause(componentId: string) {}

  resume(componentId: string) {}

  stop(componentId: string) {}
}
