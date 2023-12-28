import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterModule, Routes } from "@angular/router";
import { PhotoGalleryModule } from "@twogate/ngx-photo-gallery";
import { DrawItemComponent } from "./draw-item/draw-item.component";
import { DrawPageComponent } from "./draw-page.component";
const routes: Routes = [
  {
    path: "drawing",
    component: DrawPageComponent,
  },
  { path: "draw/:id", component: DrawItemComponent },
];
@NgModule({
  declarations: [DrawPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
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
