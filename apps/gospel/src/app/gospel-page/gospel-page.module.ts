import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { RouterModule, Routes } from "@angular/router";
import { IvyCarouselModule } from "@degloman/angular-responsive-carousel";
import { SharedModule } from "../shared/shared.module";
import { GospelItemComponent } from "./gospel-item/gospel-item.component";
import { GospelComponent } from "./gospel.component";
import { TemplateService } from "./template.service";

const routes: Routes = [
  {
    path: "truth",
    component: GospelComponent,
  },
  {
    path: "truthful-item",
    component: GospelItemComponent,
  },
];

@NgModule({
  declarations: [GospelComponent, GospelItemComponent],
  imports: [
    IvyCarouselModule,
    CommonModule,
    SharedModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatCardModule,
  ],
  providers: [TemplateService],
})
export class GospelPageModule {}
