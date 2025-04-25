import { Injectable, OnDestroy } from "@angular/core";
import { Guid } from "guid-typescript";

export enum SpeechStatus {
  Stopped = "Stopped",
  Playing = "Playing",
  Paused = "Paused",
}

@Injectable({
  providedIn: "root",
})
export class SpeechService implements OnDestroy {
  private speechSynthesis: SpeechSynthesis | null;

  public allStates = new Map<string, SpeechStatus>();
  public index = 0;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    window.onbeforeunload = () => {
      this.stop("all");
    };
  }

  ngOnDestroy(): void {
    this.stop("all");
    this.allStates.clear();
  }

  init() {
    const id = Guid.create().toString();
    const state = SpeechStatus.Stopped;
    this.allStates.set(id, state);
    return { id, state };
  }

  start(text: string, componentId: string) {
    const speak = () => {
      this.speak(text, componentId);
    };

    if (this.speechSynthesis!.speaking && this.speechSynthesis!.paused) {
      this.resume(componentId);
      return;
    }

    if (this.speechSynthesis!.speaking) {
      this.stop(componentId);
      setTimeout(speak, 1000); //we need to wait a little bit between these...
      return;
    }

    speak();
  }

  speak(text: string, componentId: string) {
    const utterance = new SpeechSynthesisUtterance(text);

    // const voices = this.speechSynthesis!.getVoices();
    // utterance.voice = voices[0];
    // console.log(voices);

    // utterance.lang = "en-US";
    // utterance.pitch = 1;
    // utterance.rate = 0.9;

    this.setStates(componentId, SpeechStatus.Playing);

    this.speechSynthesis!.speak(utterance);
  }

  pause(componentId: string) {
    this.speechSynthesis!.pause();

    this.setStates(componentId, SpeechStatus.Paused);
  }

  resume(componentId: string) {
    this.speechSynthesis!.resume();

    this.setStates(componentId, SpeechStatus.Playing);
  }

  stop(componentId: string) {
    if (componentId === "all") {
      this.allStates.clear();
    }

    this.speechSynthesis!.cancel();
    this.setStates(componentId, SpeechStatus.Stopped);
  }

  private setStates(componentId: string, state: SpeechStatus) {
    this.allStates.forEach((value, key) => {
      if (key === componentId) {
        this.allStates.set(componentId, state);
      }

      if (state === SpeechStatus.Playing) {
        //then we want to stop all the others...
        this.allStates.set(key, SpeechStatus.Stopped);
      }
    });
  }
}
