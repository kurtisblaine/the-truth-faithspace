import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { DiscernListComponent } from "./discern-list/discern-list.component";
import { DiscernPageComponent } from "./discern-page.component";
const routes: Routes = [
  {
    path: "discernments",
    component: DiscernPageComponent,
  },
];
@NgModule({
  declarations: [DiscernListComponent, DiscernPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    SharedModule,
    MatButtonModule,
  ],
  exports: [DiscernListComponent],
})
export class DiscernPageModule {}
