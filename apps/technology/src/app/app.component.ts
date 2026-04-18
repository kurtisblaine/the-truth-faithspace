import { ChangeDetectionStrategy, Component, ViewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule, MatMenuTrigger } from "@angular/material/menu";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faGears, faHome, faNewspaper, faRobot } from "@fortawesome/free-solid-svg-icons";
import {
  AuthSettingsComponent,
  LinkComponent,
  SeoBaseComponent,
  SettingsWidgetComponent,
  VoiceSettingsComponent,
} from "shared";

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
    LinkComponent,
    AuthSettingsComponent,
  ],

  template: `
    <mat-drawer-container style="width: 100%;" [hasBackdrop]="false">
      <mat-drawer style="width: 280px; position: fixed" #drawer [mode]="'side'" [autoFocus]="true">
        <mat-list>
          <div mat-subheader>Posts</div>
          <lib-link [link]="baseUrl + '/items'" [isNewPage]="false">
            <mat-list-item lines="3" (click)="drawer.close()">
              <fa-icon matListItemIcon [icon]="itemIcon"></fa-icon>
              <span matListItemTitle>Technology</span>
              <span>Shining light in the darkness of technology. </span>
            </mat-list-item>
          </lib-link>
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
              <fa-icon [icon]="icon"></fa-icon>
            </button>

            <lib-link [link]="baseUrl" [isNewPage]="false">
              <button mat-button (click)="drawer.close()"><div style="font-size: 20px">Beware of Idols</div></button>
            </lib-link>
            <span style="flex: 1 1 auto"></span>

            <lib-link [link]="'https://thelightof.life/truth'">
              <button
                mat-icon-button
                [matTooltip]="'Go to the Good News'"
                aria-labelledby="Gospel button"
                aria-label="Gospel button"
                style="margin-right: 12px"
              >
                <fa-icon [icon]="gospelIcon"></fa-icon>
              </button>
            </lib-link>

            <button
              mat-icon-button
              [matTooltip]="'App Settings'"
              aria-labelledby="Settings button"
              aria-label="Settings button"
              [matMenuTriggerFor]="settingsMenu"
            >
              <fa-icon [icon]="settingsIcon"></fa-icon>
            </button>

            <mat-menu #settingsMenu="matMenu">
              <lib-settings-widget storageName="technologyAppSettings" (onSave)="voiceSettings.save($event)">
                <lib-voice-settings storageName="technologyAppSettings" #voiceSettings></lib-voice-settings>
                <lib-auth-settings (onLogOut)="navigateToServer()" (onLogIn)="navigateToServer()"></lib-auth-settings>
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
export class AppComponent extends SeoBaseComponent {
  public title = "Beware of Idols";
  public icon = faBars;
  public homeIcon = faHome;
  public itemIcon = faRobot;
  public settingsIcon = faGears;
  public gospelIcon = faNewspaper;

  @ViewChild(MatMenuTrigger) public trigger!: MatMenuTrigger;

  constructor(private router: Router) {
    super();
  }

  openMenu() {
    this.trigger.openMenu();
  }

  navigateToServer() {
    this.router.navigateByUrl("server");
  }
}
