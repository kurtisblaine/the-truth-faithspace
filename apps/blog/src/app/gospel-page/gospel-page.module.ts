import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { RouterModule, Routes } from "@angular/router";
import { IvyCarouselModule } from "@degloman/angular-responsive-carousel";
import { SharedModule } from "../shared/shared.module";
import { GospelComponent } from "./gospel.component";

const routes: Routes = [
  {
    path: "truth",
    component: GospelComponent,
  },
];

@NgModule({
  declarations: [GospelComponent],
  imports: [IvyCarouselModule, CommonModule, SharedModule, MatButtonModule, RouterModule.forChild(routes)],
})
export class GospelPageModule {}
