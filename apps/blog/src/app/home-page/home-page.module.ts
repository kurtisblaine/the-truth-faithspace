import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CommonModule } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { AngularFullpageModule } from "@fullpage/angular-fullpage";
import { IvyCarouselModule } from "angular-responsive-carousel2";
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from "./home-page.component";

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    IvyCarouselModule,
    AngularFullpageModule,
    RouterModule.forChild(routes),
  ],
})
export class HomePageModule {}
