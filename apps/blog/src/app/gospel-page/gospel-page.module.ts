import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { IvyCarouselModule } from "@degloman/angular-responsive-carousel";
import { SharedModule } from "../shared/shared.module";
import { GospelItemComponent } from "./gospel-item/gospel-item.component";
import { GospelComponent } from "./gospel.component";

const routes: Routes = [
  {
    path: "truth",
    component: GospelComponent,
  },
  {
    path: "truth/:id",
    component: GospelItemComponent,
  },
];

@NgModule({
  declarations: [GospelComponent],
  imports: [
    IvyCarouselModule,
    CommonModule,
    SharedModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    GospelItemComponent,
  ],
})
export class GospelPageModule {}
