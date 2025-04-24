import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "any",
})
export class SpeechService {
  private speechSynthesis: SpeechSynthesis;
  private isPaused = new BehaviorSubject<boolean>(false);
  public isPaused$ = this.isPaused.asObservable();

  private isPending = new BehaviorSubject<boolean>(false);
  public isPending$ = this.isPending.asObservable();

  private isSpeaking = new BehaviorSubject<boolean>(false);
  public isSpeaking$ = this.isSpeaking.asObservable();

  private state = new BehaviorSubject<string>("stopped");
  public state$ = this.state.asObservable();

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.state.next("stopped");
  }

  speak(text: string) {
    this.cancel(); //clear out the previous one...
    const voices = this.speechSynthesis.getVoices();
    console.log(voices);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "eng";
    // utterance.voice = new SpeechSynthesisVoice();
    this.speechSynthesis.speak(utterance);
    this.isSpeaking.next(true);
    this.state.next("speaking");
  }

  pause() {
    this.speechSynthesis.pause();
    this.isPaused.next(true);
    this.isSpeaking.next(false);
    this.state.next("paused");
  }

  resume() {
    this.speechSynthesis.resume();
    this.isSpeaking.next(true);
    this.state.next("speaking");
  }

  cancel() {
    this.speechSynthesis.cancel();
    this.isPaused.next(false);
    this.isSpeaking.next(false);
    this.state.next("stopped");
  }
}
