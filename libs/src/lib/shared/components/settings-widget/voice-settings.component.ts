import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  Inject,
  inject,
  input,
  OnInit,
  PLATFORM_ID,
  signal,
} from "@angular/core";
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
    <span style="padding: 5px 0px; display: block; width: 100%"
      >The text-to-speech service uses an artificial voice.</span
    >
    } @else {
    <span class="error"> The text-to-speech service is not available on your device.</span>
    }
  `,
  styles: `
  @use '@angular/material' as mat;
  mat-form-field {
    padding: 5px 0px;
    width: 100%;
    @include mat.form-field-density(-3);
  }

  .error {
    width: 100%;
    color: var(--mat-sys-error);
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VoiceSettingsComponent implements OnInit {
  public speechService = inject(SpeechService);

  private _defaultSettings: VoiceAppSettings = {
    voice: { name: "Loading...", default: true, lang: "", voiceURI: "", localService: false },
    rate: 1,
  };
  public settings = signal<VoiceAppSettings>(this._defaultSettings);
  private _settings: VoiceAppSettings = this._defaultSettings;

  public storageName = input<string>("appSettings");

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    effect(() => {
      if (!this.speechService.voices().length || !isPlatformBrowser(this.platformId)) return;

      const storedSettings = localStorage.getItem(this.storageName());
      if (storedSettings) {
        this._settings = { ...this._defaultSettings, ...(JSON.parse(storedSettings) as VoiceAppSettings) };
        this.settings.set(this._settings);
        this.speechService.set(this._settings.voice.name, this._settings.rate);
      } else {
        const defaultEnglishVoice =
          this.speechService.voices().find((voice) => voice.name === "Alex" || voice.lang === "en-US") ??
          this.speechService.voices()[0];

        this.speechService.set(defaultEnglishVoice.name, this._defaultSettings.rate);

        this._settings.voice = this._convert(defaultEnglishVoice);
        this._settings.rate = this._defaultSettings.rate;
      }
    });
  }

  ngOnInit(): void {}

  save(appSettings: ThemeSettings) {
    this.speechService.set(this.settings().voice.name, this.settings().rate);

    const jsonSettings = JSON.stringify({
      theme: appSettings.theme,
      voice: this.settings().voice,
      rate: this.settings().rate,
    });

    localStorage.setItem(this.storageName(), jsonSettings);
  }

  _convert = (voice: SpeechSynthesisVoice) => ({
    name: voice.name,
    lang: voice.lang,
    default: voice.default,
    localService: voice.localService,
    voiceURI: voice.voiceURI,
  });
}
