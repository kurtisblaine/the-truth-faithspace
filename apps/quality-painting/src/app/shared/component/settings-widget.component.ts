import { CommonModule, isPlatformBrowser } from "@angular/common";
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { ThemeService } from "../service/theme.service";

type AppSettings = {
  theme: "light" | "dark";
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
        [(ngModel)]="this.settings.theme"
        (click)="$event.stopPropagation()"
      >
        <mat-button-toggle value="light">Light</mat-button-toggle>
        <mat-button-toggle value="dark">Dark</mat-button-toggle>
      </mat-button-toggle-group>
    </div>

    <mat-divider></mat-divider>
    <button matButton="filled" (click)="save()">Save</button>
  `,
  styles: `:host
  {
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
    color: var(--mat-sys-on-background);
    z-index: -777;
  }
  `,
  changeDetection: ChangeDetectionStrategy.Default,
})
export class SettingsWidgetComponent implements OnInit, OnDestroy {
  public themeService = inject(ThemeService);

  public settings: AppSettings = {
    theme: "light",
  };

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    afterNextRender(() => {
      const storedSettings = localStorage.getItem("davesAppSettings");
      if (storedSettings) {
        this.settings = JSON.parse(storedSettings) as AppSettings;
        this.themeService.setTheme(this.settings.theme);
      }
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    localStorage.clear();
  }

  save() {
    const jsonSettings = JSON.stringify({ theme: this.settings.theme });
    if (isPlatformBrowser(this.platformId)) localStorage.setItem("davesAppSettings", jsonSettings);

    this.themeService.setTheme(this.settings.theme);
  }
}
