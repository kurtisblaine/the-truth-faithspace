import { CommonModule } from "@angular/common";
import { Component, Input, OnDestroy, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { faPause, faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import { Subscription } from "rxjs";
import { LibFaIconComponent } from "../icon/fa-icon.component";
import { SpeechService, SpeechStatus } from "./speech.service";

export enum NarratorStyle {
  Group = "Group",
  Flex = "Flex",
  Fab = "Fab",
}
@Component({
  selector: "lib-narrator",
  templateUrl: "./narrator.component.html",
  styleUrl: "./narrator.component.scss",
  imports: [MatButtonModule, MatButtonToggleModule, CommonModule, LibFaIconComponent, FormsModule],
})
export class NarratorComponent implements OnDestroy, OnInit {
  @Input() public buttonStyle = NarratorStyle.Fab;
  @Input() public text = "";

  public narratorStyle = NarratorStyle;
  public speechStatus = SpeechStatus;
  public playIcon = faPlay;
  public pauseIcon = faPause;
  public stopIcon = faStop;

  private subscription!: Subscription;
  private playingSubscription!: Subscription;

  public componentId!: string;
  public thisLocalState = SpeechStatus.Stopped;
  public isAnotherPlaying = false;

  @ViewChild("textContainer", { read: ViewContainerRef }) private textContainer!: ViewContainerRef;
  constructor(public speechService: SpeechService) {}

  ngOnInit(): void {
    const { id, state } = this.speechService.init();
    this.componentId = id;

    this.subscription = state.subscribe((s) => {
      this.thisLocalState = s;
    });

    this.playingSubscription = this.speechService.currentlyPlayingId$.subscribe((id) => {
      this.isAnotherPlaying = !!id && id !== this.componentId;
    });
  }

  ngOnDestroy(): void {
    this.stopReading();
    this.subscription.unsubscribe();
    this.playingSubscription.unsubscribe();
  }

  startReading() {
    let text = (this.textContainer.element.nativeElement as HTMLElement).innerText?.trim()?.toString();

    const hasText = !!text;
    if (!hasText && this.text) {
      text = this.text;
    }

    if (!text) return;

    let cleanedText = this.removeParentheses(text!);
    cleanedText = this.removeBrackets(cleanedText!);
    if (!cleanedText) return;

    this.speechService.start(cleanedText, this.componentId);
  }

  removeParentheses(str: string) {
    return str.replace(/\([^)]*\)/g, "");
  }

  removeBrackets(str: string) {
    return str.replace(/\[.*?\]/g, "");
  }

  pauseReading() {
    this.speechService.pause(this.componentId);
  }

  resumeReading() {
    this.speechService.resume(this.componentId);
  }

  stopReading() {
    this.speechService.stop(this.componentId);
  }
}
