import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { PsalmListComponent } from "./psalm-list/psalm-list.component";
import { PsalmPageComponent } from "./psalm-page.component";
const routes: Routes = [
  {
    path: "psalms",
    component: PsalmPageComponent,
  },
];
@NgModule({
  declarations: [PsalmPageComponent, PsalmListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [PsalmListComponent],
})
export class PsalmPageModule {}
