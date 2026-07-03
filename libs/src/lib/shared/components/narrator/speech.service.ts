import { isPlatformBrowser } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Inject, inject, Injectable, OnDestroy, PLATFORM_ID, signal } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BehaviorSubject, Subscription } from "rxjs";
import { v4 } from "uuid";

export enum SpeechStatus {
  Stopped = "Stopped",
  Playing = "Playing",
  Paused = "Paused",
  Download = "Download",
}
@Injectable({
  providedIn: "root",
})
export class SpeechService implements OnDestroy {
  public speechSynthesis: SpeechSynthesis | null | undefined;
  private _snackBar = inject(MatSnackBar);
  private _httpClient = inject(HttpClient);

  private _cloudinaryBaseUrl = `https://res.cloudinary.com/dffihsa2y/`;

  public allStates = new Map<string, BehaviorSubject<SpeechStatus>>();
  public hasBrowserSupport = false;
  private subscription!: Subscription;

  private currentlyPlayingId = new BehaviorSubject<string>("");
  public currentlyPlayingId$ = this.currentlyPlayingId.asObservable();

  public selectedVoice!: SpeechSynthesisVoice;
  public selectedRate!: number;

  public voices = signal<SpeechSynthesisVoice[]>([]);

  constructor(@Inject(PLATFORM_ID) private platformId: any) {
    if (!isPlatformBrowser(this.platformId)) return;

    this.speechSynthesis = window.speechSynthesis;

    const voices = this.speechSynthesis?.getVoices()?.filter((v) => v.lang.startsWith("en")) ?? [];
    this.voices.set(voices);

    this.speechSynthesis.onvoiceschanged = () => {
      const voices = this.speechSynthesis?.getVoices()?.filter((v) => v.lang.startsWith("en")) ?? [];
      this.voices.set(voices);
    };

    this.hasBrowserSupport = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    if (!this.hasBrowserSupport) {
      this._snackBar.open("Text to speech is not supported on your device.", "Dismiss", {
        horizontalPosition: "start",
        verticalPosition: "bottom",
      });
    }

    window.onbeforeunload = () => {
      if (this.currentlyPlayingId.value) {
        this.stop(this.currentlyPlayingId.value);
      }
    };
  }

  ngOnDestroy(): void {
    this.stop("all");

    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  init() {
    const id = v4().toString();
    const state = new BehaviorSubject<SpeechStatus>(SpeechStatus.Stopped);
    this.allStates.set(id, state);
    return { id, state: state.asObservable() };
  }

  set(name: string, rate: number) {
    this.selectedVoice = this._getVoice(name);
    this.selectedRate = rate;
  }

  _getVoice = (name: string) => this.voices().filter((voice) => voice.name === name)[0];

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

    utterance.voice = this.selectedVoice;
    utterance.lang = this.selectedVoice.lang;
    utterance.rate = this.selectedRate;
    utterance.pitch = 1;

    this.speechSynthesis?.speak(utterance);
    utterance.onend = () => {
      this.stop(this.currentlyPlayingId.value);
    };

    this.setState(componentId, SpeechStatus.Playing);
  }

  pause(componentId: string) {
    this.speechSynthesis?.pause();
    this.currentlyPlayingId.next(componentId);

    this.setState(componentId, SpeechStatus.Paused);
  }

  resume(componentId: string) {
    this.speechSynthesis?.resume();
    this.currentlyPlayingId.next(componentId);

    this.setState(componentId, SpeechStatus.Playing);
  }

  stop(componentId: string) {
    this.speechSynthesis?.cancel();
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
      state?.next(SpeechStatus.Stopped);
    });
  }

  private setState(componentId: string, state: SpeechStatus) {
    this.allStates.forEach((value, key) => {
      if (key === componentId) {
        const thisState = this.allStates.get(componentId);
        thisState?.next(state);
        return;
      }
    });
  }

  public downloadAudio(url: string) {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this._httpClient
      .get(`${this._cloudinaryBaseUrl}video/upload/${url}`, { responseType: "blob" })
      .subscribe((blob: any) => {
        const blobUrl = window.URL.createObjectURL(blob);

        const anchor = document.createElement("a");
        anchor.href = blobUrl;
        anchor.download = url.split(/[\\/]/).pop()!.toString();

        anchor.click();

        window.URL.revokeObjectURL(blobUrl);
      });
  }
}
