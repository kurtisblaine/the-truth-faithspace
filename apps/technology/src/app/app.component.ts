import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { Router, RouterOutlet } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faBars, faHome, faRobot } from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatListModule,
    MatSidenavModule,
    MatTooltipModule,
  ],

  template: `
    <mat-drawer-container style="width: 100%; height: 100%" [hasBackdrop]="false">
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
            <button mat-icon-button class="example-icon" (click)="drawer.toggle()" title="menu-button">
              <fa-icon [icon]="icon" [size]="'lg'"></fa-icon>
            </button>

            <span>Technology</span>
            <span style="flex: 1 1 auto"></span>

            <!-- <button mat-icon-button (click)="openBible()" [matTooltip]="'Open the Bible'">
              <fa-icon [icon]="bookIcon" [size]="'lg'"></fa-icon>
            </button>
            <button
              mat-icon-button
              (click)="goGospel()"
              [matTooltip]="'Go to the Good News'"
              style="margin-right: 12px"
            >
              <fa-icon [icon]="gospelIcon" [size]="'lg'"></fa-icon>
            </button> -->
          </mat-toolbar>
        </div>

        <router-outlet></router-outlet>
      </mat-drawer-content>
    </mat-drawer-container>
  `,
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  public title = "Technology";
  public icon = faBars;
  public homeIcon = faHome;
  public itemIcon = faRobot;
  constructor(private router: Router) {}

  public goHome() {
    this.router.navigateByUrl("").then(() => {});
  }

  public goItems() {
    this.router.navigateByUrl("items").then(() => {});
  }
}
