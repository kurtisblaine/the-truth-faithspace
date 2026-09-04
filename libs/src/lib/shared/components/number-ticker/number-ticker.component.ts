import { isPlatformBrowser } from "@angular/common";
import { ChangeDetectionStrategy, Component, inject, input, PLATFORM_ID } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { NgxNumberTickerComponent } from "@omnedia/ngx-number-ticker";

@Component({
  selector: "lib-number-ticker",
  imports: [NgxNumberTickerComponent, MatCardModule],
  template: `
    <mat-card appearance="outlined" style="height: 100%">
      <mat-card-header>
        <mat-card-title style="line-height: unset;"
          ><h2 class="primary-color">{{ title() }}</h2></mat-card-title
        >
        <mat-card-subtitle>
          <h3>{{ subtitle() }}</h3>
        </mat-card-subtitle>
      </mat-card-header>
      <mat-card-content style="margin: 4px auto; font-size: 100px">
        @if(isPlatformBrowser()) {
        <om-number-ticker [countTo]="count()"></om-number-ticker>
        } @else {
        <div style="margin: 100px 0">
          {{ count() }}
        </div>
        }
      </mat-card-content>
      <mat-card-actions> </mat-card-actions>
    </mat-card>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberTickerComponent {
  public title = input.required<string>();
  public subtitle = input<string>();

  public count = input.required<number>();

  public platformId = inject(PLATFORM_ID);
  public isPlatformBrowser = () => isPlatformBrowser(this.platformId);
}
