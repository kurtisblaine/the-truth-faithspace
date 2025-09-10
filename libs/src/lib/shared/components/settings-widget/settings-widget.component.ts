import { CommonModule } from "@angular/common";
import {
  afterNextRender,
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
  input,
  OnInit,
  output,
  PLATFORM_ID,
  signal,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDividerModule } from "@angular/material/divider";
import { MatSelectModule } from "@angular/material/select";
import { ThemeService } from "./theme.service";

export type ThemeSettings = {
  theme: "light" | "dark";
};

@Component({
  selector: "lib-settings-widget",
  imports: [CommonModule, FormsModule, MatSelectModule, MatButtonToggleModule, MatButtonModule, MatDividerModule],
  template: `
    <h3>Settings</h3>
    <div style="padding: 5px 0px">
      <mat-label style="padding-right: 5px">Theme</mat-label>
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

    <ng-content></ng-content>

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsWidgetComponent implements OnInit {
  public themeService = inject(ThemeService);

  public storageName = input<string>("appSettings");
  public onSave = output<ThemeSettings>();

  public settings = signal<ThemeSettings>({
    theme: "light",
  });

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    afterNextRender(() => {
      const storedSettings = localStorage.getItem(this.storageName());
      if (storedSettings) {
        this.settings.set(JSON.parse(storedSettings) as ThemeSettings);
        this.themeService.setTheme(this.settings().theme);
      }
    });
  }

  ngOnInit(): void {}

  save() {
    this.themeService.setTheme(this.settings().theme);
    this.onSave.emit(this.settings());
  }
}
