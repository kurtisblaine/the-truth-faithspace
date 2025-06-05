import { inject, Injectable, OnDestroy } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject } from "rxjs";
import { v4 } from "uuid";

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

  public allStates = new Map<string, BehaviorSubject<SpeechStatus>>();
  public hasBrowserSupport = false;
  private currentlyPlayingId = new BehaviorSubject<string>("");
  public currentlyPlayingId$ = this.currentlyPlayingId.asObservable();

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
    const id = v4().toString();
    const state = new BehaviorSubject<SpeechStatus>(SpeechStatus.Stopped);
    this.allStates.set(id, state);
    return { id, state: state.asObservable() };
  }

  start(text: string, componentId: string) {
    const thisState = this.allStates.get(componentId)?.value;

    if (thisState === SpeechStatus.Paused) {
      this.resume(componentId);
      return;
    }

    const playingId = this.isSomePlaying();
    if (playingId === componentId) {
      this.pause(componentId); //hit play and the same one is already playing...
      return;
    }

    if (thisState === SpeechStatus.Stopped) {
      this.speak(text, componentId);
      return;
    }
  }

  speak(text: string, componentId: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    this.currentlyPlayingId.next(componentId);

    const voices = this.speechSynthesis!.getVoices();
    const defaultVoice = voices[0];
    utterance.voice = defaultVoice;
    utterance.lang = defaultVoice.lang;

    this.speechSynthesis!.speak(utterance);
    utterance!.onend = () => {
      this.currentlyPlayingId.next("");
      this.resetStates();
    };

    this.setState(componentId, SpeechStatus.Playing);
  }

  pause(componentId: string) {
    this.speechSynthesis!.pause();
    this.currentlyPlayingId.next(componentId);

    this.setState(componentId, SpeechStatus.Paused);
  }

  resume(componentId: string) {
    this.speechSynthesis!.resume();
    this.currentlyPlayingId.next(componentId);

    this.setState(componentId, SpeechStatus.Playing);
  }

  stop(componentId: string) {
    this.speechSynthesis!.cancel();
    this.currentlyPlayingId.next("");

    if (componentId === "all") {
      this.allStates.clear();
    } else {
      this.resetStates();
    }
  }

  public isSomePlaying() {
    let id = "";

    this.allStates.forEach((value, key) => {
      if (value.value === SpeechStatus.Playing || value.value === SpeechStatus.Paused) {
        id = key;
        return;
      }
    });

    return id;
  }

  private resetStates() {
    this.allStates.forEach((value, key) => {
      const state = this.allStates.get(key);
      state!.next(SpeechStatus.Stopped);
    });
  }

  private setState(componentId: string, state: SpeechStatus) {
    this.allStates.forEach((value, key) => {
      if (key === componentId) {
        const thisState = this.allStates.get(componentId);
        thisState!.next(state);
        return;
      }
    });
  }
}
