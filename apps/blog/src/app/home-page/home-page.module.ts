import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// import { IvyCarouselModule } from "angular-responsive-carousel";
import { MatButtonModule } from "@angular/material/button";
import { SharedModule } from "../shared/shared.module";
import { HomePageComponent } from "./home-page.component";
@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, SharedModule, MatButtonModule],
  // IvyCarouselModule, not compatable with new angular version
})
export class HomePageModule {}
