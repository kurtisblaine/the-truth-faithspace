import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { IvyCarouselModule } from "angular-responsive-carousel";
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from "./home-page.component";

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, IvyCarouselModule],
})
export class HomePageModule {}
