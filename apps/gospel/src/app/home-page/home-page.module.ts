import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { LinkComponent, NarratorComponent } from "shared";
import { ReferenceTooltipComponent } from "../shared/components/reference-tooltip/reference-tooltip.component";
import HomePageComponent from "./home-page.component";

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
    ReferenceTooltipComponent,
    MatButtonModule,
    MatCardModule,
    NarratorComponent,
    LinkComponent,
    RouterModule.forChild(routes),
  ],
})
export class HomePageModule {}
