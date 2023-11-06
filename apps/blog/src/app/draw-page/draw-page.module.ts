import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { PhotoGalleryModule } from "@twogate/ngx-photo-gallery";
import { DrawPageComponent } from "./draw-page.component";

@NgModule({
  declarations: [DrawPageComponent],
  imports: [
    CommonModule,
    MatGridListModule,
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
