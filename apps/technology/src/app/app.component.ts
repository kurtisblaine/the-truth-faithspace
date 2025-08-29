import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faGears, faHome, faRobot } from "@fortawesome/free-solid-svg-icons";
import { SettingsWidgetComponent, VoiceSettingsComponent } from "../../../../libs/src";

@Component({
  selector: "app-root",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
    MatMenuModule,
    SettingsWidgetComponent,
    VoiceSettingsComponent,
  ],

  template: `
    <mat-drawer-container style="width: 100%;" [hasBackdrop]="false">
      <mat-drawer style="width: 280px; position: fixed" #drawer [mode]="'side'" [autoFocus]="true">
        <mat-list>
          <mat-list-item lines="1" (click)="goHome(); drawer.close()">
            <fa-icon matListItemIcon [icon]="homeIcon" [size]="'lg'"></fa-icon>
            <span matListItemTitle>Welcome</span>
          </mat-list-item>
          <mat-divider></mat-divider>

          <div mat-subheader>Posts</div>
          <mat-list-item lines="3" (click)="goItems(); drawer.close()">
            <fa-icon matListItemIcon [icon]="itemIcon" [size]="'lg'"></fa-icon>
            <span matListItemTitle>Technology</span>
            <span>shining light on the darkness of technology. </span>
          </mat-list-item>
        </mat-list>
      </mat-drawer>
      <mat-drawer-content>
        <div class="header">
          <mat-toolbar color="primary">
            <button
              mat-icon-button
              class="example-icon"
              (click)="drawer.toggle()"
              aria-labelledby="Menu button"
              aria-label="Menu button"
            >
              <fa-icon [icon]="icon" [size]="'lg'"></fa-icon>
            </button>

            <button mat-button (click)="goHome(); drawer.close()"><h1>Beware of Idols</h1></button>

            <span style="flex: 1 1 auto"></span>

            <button
              mat-icon-button
              [matTooltip]="'Settings'"
              aria-labelledby="Settings button"
              aria-label="Settings button"
              [matMenuTriggerFor]="settingsMenu"
            >
              <fa-icon [icon]="settingsIcon" [size]="'lg'"></fa-icon>
            </button>

            <mat-menu #settingsMenu="matMenu">
              <lib-settings-widget storageName="technologyAppSettings" (onSave)="voiceSettings.save($event)">
                <lib-voice-settings storageName="technologyAppSettings" #voiceSettings></lib-voice-settings>
              </lib-settings-widget>
            </mat-menu>
          </mat-toolbar>
        </div>

        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public title = "Beware of Idols";
  public icon = faBars;
  public homeIcon = faHome;
  public itemIcon = faRobot;
  public settingsIcon = faGears;

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  constructor(private router: Router) {}

  openMenu() {
    this.trigger.openMenu();
  }

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }

  public goItems() {
    this.router.navigateByUrl("items").then(() => {});
  }
}
