import { isPlatformBrowser } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, PLATFORM_ID } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { NgxNumberTickerComponent } from "@omnedia/ngx-number-ticker";

@Component({
  selector: "lib-number-ticker",
  imports: [NgxNumberTickerComponent, MatCardModule],
  template: `
    <mat-card appearance="outlined" style="height: 100%">
      <mat-card-header style="justify-content: center; text-align: center;">
        <mat-card-title style="line-height: unset;">
          @if(first()) {
          <h1 class="primary-color">{{ title() }}</h1>
          } @else {
          <h2 class="primary-color">{{ title() }}</h2>
          }
        </mat-card-title>
        <mat-card-subtitle>
          @if(first()) {
          <h2>{{ subtitle() }}</h2>
          } @else {
          <h3>{{ subtitle() }}</h3>
          }
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content style="margin: 0px auto;">
        @if(isPlatformBrowser()) {
        <om-number-ticker [countTo]="count()" style="font-size: 60px;"></om-number-ticker>
        } @else {
        <div style="margin: 100px 0">
          {{ count() }}
        </div>
        }
      </mat-card-content>
      <!-- <mat-card-actions> </mat-card-actions> -->
    </mat-card>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberTickerComponent {
  public title = input.required<string>();
  public subtitle = input<string>();
  public first = input<boolean>(false);

  public count = input.required<number>();

  public platformId = inject(PLATFORM_ID);
  public isPlatformBrowser = () => isPlatformBrowser(this.platformId);
}
