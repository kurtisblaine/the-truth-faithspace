import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import HomePageComponent from "./home-page.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
  },
];

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatDividerModule,
    MatButtonModule,
    MatCardModule,
    SharedLibraryModule,
    RouterModule.forChild(routes),
  ],
})
export class HomePageModule {}
