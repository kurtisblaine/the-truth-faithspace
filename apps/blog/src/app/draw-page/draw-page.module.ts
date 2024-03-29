import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { YOUTUBE_PLAYER_CONFIG, YouTubePlayer } from "@angular/youtube-player";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PhotoGalleryModule } from "@twogate/ngx-photo-gallery";
import { DrawItemComponent } from "./draw-item/draw-item.component";
import { DrawPageComponent } from "./draw-page.component";

const routes: Routes = [
  {
    path: "drawing",
    component: DrawPageComponent,
  },
  { path: "draw/:video/:id", component: DrawItemComponent },
  { path: "draw/:id", component: DrawItemComponent },
];
@NgModule({
  declarations: [DrawPageComponent, DrawItemComponent],
  providers: [
    {
      provide: YOUTUBE_PLAYER_CONFIG,
      useValue: {
        disablePlaceholder: true,
      },
    },
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    YouTubePlayer,
    FontAwesomeModule,
    MatTooltipModule,
    PhotoGalleryModule.forRoot({
      defaultOptions: {
        arrowEl: false,
        closeEl: false,
        zoomEl: false,
        captionEl: true,
        indexIndicatorSep: " of ",
        closeOnScroll: false,
        arrowKeys: true,
        allowPanToNext: true,
        closeOnVerticalDrag: true,
        shareEl: false,
      },
    }),
  ],
})
export class DrawPageModule {}
