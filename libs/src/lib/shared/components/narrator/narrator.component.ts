import { ChangeDetectionStrategy, Component, OnDestroy, ViewChild, ViewContainerRef } from "@angular/core";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { SpeechService } from "./speech.service";

@Component({
  selector: "lib-narrator",
  templateUrl: "./narrator.component.html",
  styleUrl: "./narrator.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class NarratorComponent implements OnDestroy {
  public playIcon = faPlay;
  public pauseIcon = faPause;
  public stopIcon = faStop;

  @ViewChild("textContainer", { read: ViewContainerRef }) private textContainer!: ViewContainerRef;
  constructor(public speechService: SpeechService) {}

  ngOnDestroy(): void {
    this.speechService.cancel();
  }

  startReading() {
    const text = (this.textContainer.element.nativeElement as HTMLElement).textContent?.toString();
    if (text) {
      this.speechService.speak(text);
    }
  }

  pauseReading() {
    this.speechService.pause();
  }

  resumeReading() {
    this.speechService.resume();
  }

  stopReading() {
    this.speechService.cancel();
  }
}
