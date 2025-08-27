import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, effect, inject, OnDestroy, OnInit, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { SpeechService } from "../../../../../libs/src/lib/shared/components/narrator/speech.service";
import { ThemeService } from "./theme.service";

type AppSettings = {
  theme: "light" | "dark";
  voice: SpeechSynthesisVoice;
};

@Component({
  selector: "app-settings-widget",
  imports: [CommonModule, FormsModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatDividerModule],
  template: `
    <h3>Settings</h3>
    <div>
      <mat-label>Theme</mat-label>
      <mat-button-toggle-group
        aria-label="Theme Select"
        aria-labelledby="Theme Select"
        [(ngModel)]="settings().theme"
        (click)="$event.stopPropagation()"
      >
        <mat-button-toggle value="light">Light</mat-button-toggle>
        <mat-button-toggle value="dark">Dark</mat-button-toggle>
      </mat-button-toggle-group>
    </div>

    <div>
      @if (speechService.voices().length){
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
      } @else {
      <span class="error"> The Speech service is not available on your device.</span>
      }
    </div>

    <mat-divider></mat-divider>
    <button matButton="filled" (click)="save()">Save</button>
  `,
  styles: `:host
  {
    display: flex;
    flex-direction: column;
    padding: 15px;
    color: var(--mat-sys-on-background);
  }

  .error {
    color: var(--mat-sys-error);
  }
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SettingsWidgetComponent implements OnInit, OnDestroy {
  public speechService = inject(SpeechService);
  public themeService = inject(ThemeService);

  public settings = signal<AppSettings>({
    theme: "light",
    voice: { name: "Loading...", default: true, lang: "", voiceURI: "", localService: false },
  });

  constructor() {
    const storedSettings = window.localStorage?.getItem("technologyAppSettings");
    if (storedSettings) {
      this.settings.set(JSON.parse(storedSettings) as AppSettings);
      this.themeService.setTheme(this.settings().theme);
    }

    effect(() => {
      if (!this.speechService.voices().length) return;

      const storedSettings = window.localStorage?.getItem("technologyAppSettings");
      if (storedSettings) {
        this.settings.set(JSON.parse(storedSettings) as AppSettings);
        this.speechService.setVoice(this.settings().voice.name);
      } else {
        const defaultEnglishVoice =
          this.speechService.voices().find((voice) => voice.name === "Alex" || voice.lang === "en-US") ??
          this.speechService.voices()[0];

        this.speechService.setVoice(defaultEnglishVoice.name);
        this.settings().voice = this._convert(defaultEnglishVoice);
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    window.localStorage?.clear();
  }

  save() {
    this.speechService.setVoice(this.settings().voice.name);

    const jsonSettings = JSON.stringify({ theme: this.settings().theme, voice: this.settings().voice });
    window.localStorage?.setItem("technologyAppSettings", jsonSettings);

    this.themeService.setTheme(this.settings().theme);
  }

  _convert = (voice: SpeechSynthesisVoice) => ({
    name: voice.name,
    lang: voice.lang,
    default: voice.default,
    localService: voice.localService,
    voiceURI: voice.voiceURI,
  });
}
