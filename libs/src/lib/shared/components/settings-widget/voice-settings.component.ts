import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, inject, input, OnDestroy, OnInit, signal } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { SpeechService } from "../narrator/speech.service";
import { ThemeSettings } from "./settings-widget.component";

type VoiceAppSettings = {
  voice: SpeechSynthesisVoice;
  rate: number;
};

@Component({
  selector: "lib-voice-settings",
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  template: `
    @if (speechService.voices().length){
    <mat-form-field appearance="outline" subscriptSizing="dynamic">
      <mat-label>Voice</mat-label>
      <mat-select
        aria-labelledby="Voice Select"
        aria-label="Voice Select"
        [(ngModel)]="settings().voice.name"
        (click)="$event.stopPropagation()"
      >
        @for (voice of speechService.voices(); track $index) {
        <mat-option [value]="voice.name">{{ voice.name }} ({{ voice.lang }})</mat-option>
        }
      </mat-select>
    </mat-form-field>

    <mat-form-field appearance="outline" subscriptSizing="dynamic">
      <mat-label>Rate</mat-label>
      <input
        matInput
        aria-label="Rate Input"
        aria-labelledby="Rate Input"
        type="number"
        step=".1"
        [(ngModel)]="settings().rate"
        (click)="$event.stopPropagation()"
      />
    </mat-form-field>
    } @else {
    <span class="error"> The text-to-speech service is not available on your device.</span>
    }
  `,
  styles: `
  @use '@angular/material' as mat;
  mat-form-field {
    padding: 5px 0px;
    @include mat.form-field-density(-3);
  }

  .error {
    color: var(--mat-sys-error);
  }
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class VoiceSettingsComponent implements OnInit, OnDestroy {
  public speechService = inject(SpeechService);

  public settings = signal<VoiceAppSettings>({
    voice: { name: "Loading...", default: true, lang: "", voiceURI: "", localService: false },
    rate: 1.0,
  });

  public storageName = input<string>("appSettings");

  constructor() {
    effect(() => {
      if (!this.speechService.voices().length) return;

      const storedSettings = window.localStorage?.getItem(this.storageName());
      if (storedSettings) {
        this.settings.set(JSON.parse(storedSettings) as VoiceAppSettings);
        this.speechService.set(this.settings().voice.name, this.settings().rate ?? 1.0);
      } else {
        const defaultEnglishVoice =
          this.speechService.voices().find((voice) => voice.name === "Alex" || voice.lang === "en-US") ??
          this.speechService.voices()[0];
        const defaultRate = 1;

        this.speechService.set(defaultEnglishVoice.name, defaultRate);

        this.settings().voice = this._convert(defaultEnglishVoice);
        this.settings().rate = defaultRate;
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    window.localStorage?.clear();
  }

  save(appSettings: ThemeSettings) {
    this.speechService.set(this.settings().voice.name, this.settings().rate);

    const jsonSettings = JSON.stringify({
      theme: appSettings.theme,
      voice: this.settings().voice,
      rate: this.settings().rate,
    });
    window.localStorage?.setItem(this.storageName(), jsonSettings);
  }

  _convert = (voice: SpeechSynthesisVoice) => ({
    name: voice.name,
    lang: voice.lang,
    default: voice.default,
    localService: voice.localService,
    voiceURI: voice.voiceURI,
  });
}
