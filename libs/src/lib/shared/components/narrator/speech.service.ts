import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class SpeechService {
  private speechSynthesis: SpeechSynthesis;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
  }

  speak(text: string) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 10;
    utterance.lang = "eng";
    // utterance.voice = new SpeechSynthesisVoice();
    this.speechSynthesis.speak(utterance);
  }

  pause() {
    this.speechSynthesis.pause();
  }

  resume() {
    this.speechSynthesis.resume();
  }

  cancel() {
    this.speechSynthesis.cancel();
  }
}
