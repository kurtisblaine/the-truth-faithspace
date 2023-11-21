import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { IvyCarouselModule } from "angular-responsive-carousel2";
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from "./home-page.component";
@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, MatButtonModule, IvyCarouselModule],
})
export class HomePageModule {}
