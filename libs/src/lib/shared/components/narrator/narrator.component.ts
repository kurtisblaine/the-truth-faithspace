import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { BehaviorSubject } from "rxjs";
import { SpeechService, SpeechStatus } from "./speech.service";

export enum NarratorStyle {
  Group = "Group",
  Flex = "Flex",
}
@Component({
  selector: "lib-narrator",
  templateUrl: "./narrator.component.html",
  styleUrl: "./narrator.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class NarratorComponent implements OnDestroy, OnInit {
  @Input() public buttonStyle = NarratorStyle.Flex;

  public narratorStyle = NarratorStyle;
  public speechStatus = SpeechStatus;
  public playIcon = faPlay;
  public pauseIcon = faPause;
  public stopIcon = faStop;

  private isPaused = new BehaviorSubject<boolean>(false);
  public isPaused$ = this.isPaused.asObservable();

  private isPending = new BehaviorSubject<boolean>(false);
  public isPending$ = this.isPending.asObservable();

  private isSpeaking = new BehaviorSubject<boolean>(false);
  public isSpeaking$ = this.isSpeaking.asObservable();

  private isStopped = new BehaviorSubject<boolean>(true);
  public isStopped$ = this.isStopped.asObservable();

  public state = SpeechStatus.Stopped;
  public componentId!: string;

  @ViewChild("textContainer", { read: ViewContainerRef }) private textContainer!: ViewContainerRef;
  constructor(public speechService: SpeechService) {}

  ngOnInit(): void {
    const { id, state } = this.speechService.init();
    this.componentId = id;
    this.state = state;
  }

  ngOnDestroy(): void {
    this.stopReading();
  }

  startReading() {
    const text = (this.textContainer.element.nativeElement as HTMLElement).textContent?.toString();
    if (!text) return;

    const cleanedText = this.removeParentheses(text!);
    if (!cleanedText) return;

    this.state = SpeechStatus.Playing;
    this.speechService.start(cleanedText, this.componentId);

    this.isSpeaking.next(true);
    this.isStopped.next(false);
    this.isPending.next(true);
  }

  removeParentheses(str: string) {
    return str.replace(/\([^)]*\)/g, "");
  }

  pauseReading() {
    this.speechService.pause(this.componentId);
    this.state = SpeechStatus.Paused;

    this.isPaused.next(true);
    this.isSpeaking.next(false);
  }

  resumeReading() {
    this.speechService.resume(this.componentId);
    this.state = SpeechStatus.Playing;

    this.isSpeaking.next(true);
  }

  stopReading() {
    this.speechService.stop(this.componentId);
    this.state = SpeechStatus.Stopped;

    this.isPaused.next(false);
    this.isSpeaking.next(false);
    this.isStopped.next(true);
    this.isPending.next(false);
  }
}
