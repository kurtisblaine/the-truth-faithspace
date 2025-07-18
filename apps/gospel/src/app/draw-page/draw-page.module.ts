import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { PinchZoomComponent } from "@meddv/ngx-pinch-zoom";
import { LibFaIconComponent } from "shared";
import { LinkComponent } from "../shared/components/link-redirect/link.component";
import { DrawItemComponent } from "./draw-item/draw-item.component";
import { DrawPageComponent } from "./draw-page.component";

const routes: Routes = [
  {
    path: "",
    component: DrawPageComponent,
  },
  {
    path: "draw/:id",
    component: DrawItemComponent,
  },
];
@NgModule({
  declarations: [DrawPageComponent, DrawItemComponent],
  providers: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatGridListModule,
    MatTooltipModule,
    PinchZoomComponent,
    LibFaIconComponent,
    NgOptimizedImage,
    LinkComponent,
  ],
})
export class DrawPageModule {}
