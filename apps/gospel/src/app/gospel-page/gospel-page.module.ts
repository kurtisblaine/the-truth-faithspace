import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { RouterModule, Routes } from "@angular/router";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import { GospelHeaderComponent } from "./gospel-header/gospel-header.component";
import { GospelItemComponent } from "./gospel-item/gospel-item.component";
import { GospelSectionComponent } from "./gospel-section/gospel-section.component";
import { GospelComponent } from "./gospel.component";
import { RouterService } from "./router.service";
import { TemplateService } from "./template.service";

const routes: Routes = [
  {
    path: "truth",
    component: GospelComponent,
  },
  {
    path: "truthful-item/:title",
    component: GospelItemComponent,
  },
];

@NgModule({
  declarations: [GospelComponent, GospelItemComponent, GospelSectionComponent, GospelHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedLibraryModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatExpansionModule,
  ],
  providers: [TemplateService, RouterService],
})
export class GospelPageModule {}
