import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { PhotoGalleryModule } from "@twogate/ngx-photo-gallery";
import { DrawPageComponent } from "./draw-page.component";

@NgModule({
  declarations: [DrawPageComponent],
  imports: [
    CommonModule,
    PhotoGalleryModule.forRoot({
      defaultOptions: {
        arrowEl: true,
        indexIndicatorSep: "-",
      },
    }),
  ],
})
export class DrawPageModule {}
