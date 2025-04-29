import { inject, Injectable, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
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
  private _snackBar = inject(MatSnackBar);

  public allStates = new Map<string, SpeechStatus>();
  public hasBrowserSupport = false;

  //or try to use talkify... if it is free...
  constructor() {
    this.hasBrowserSupport = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    if (!this.hasBrowserSupport) {
      this._snackBar.open("Text to speech is not supported on your device.", "Dismiss", {
        horizontalPosition: "start",
        verticalPosition: "bottom",
      });
    }

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
      setTimeout(speak, 0); //we need to wait a little bit between these...
      return;
    }

    speak();
  }

  speak(text: string, componentId: string) {
    const utterance = new SpeechSynthesisUtterance(text);

    const voices = this.speechSynthesis!.getVoices();
    const defaultVoice = voices[0];
    utterance.voice = defaultVoice;
    utterance.lang = defaultVoice.lang;

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
