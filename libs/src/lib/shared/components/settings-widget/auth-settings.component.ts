import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { Subscription } from "rxjs";
import { TooltipDirective } from "../../directives/tooltip.directive";
import { AuthService } from "./auth.service";

@Component({
  selector: "lib-auth-settings",
  imports: [MatButtonModule, CommonModule, TooltipDirective],
  template: `
    <div style="display: flex; padding: 5px 0px">
      @if(userName) {
      <button matButton libTooltip="{{ userName }}" class="user-name">{{ userName }}</button>
      <button matButton="outlined" (click)="onLogout()">Logout</button>
      } @else {
      <button style="flex: 1 1 100%" matButton="outlined" (click)="onLogin()">Login</button>
      }
    </div>
  `,
  styles: `.user-name {
    align-content: center;
    padding-right: 5px;
  }`,
})
export class AuthSettingsComponent implements OnInit, OnDestroy {
  public userName!: string | undefined | null;
  private subscription!: Subscription;

  @Output() private onLogOut = new EventEmitter();
  @Output() private onLogIn = new EventEmitter();

  constructor(public authService: AuthService) {}

  public ngOnInit(): void {
    this.subscription = this.authService.user$.subscribe((user) => (this.userName = user?.email));
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  public onLogout() {
    this.authService.logout();
    this.onLogOut.emit();
  }

  public onLogin() {
    this.onLogIn.emit();
  }
}
