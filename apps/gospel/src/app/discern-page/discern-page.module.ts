import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import { DiscernDetailComponent } from "./discern-detail/discern-detail.component";
import { DiscernListComponent } from "./discern-list/discern-list.component";
import { DiscernPageComponent } from "./discern-page.component";
const routes: Routes = [
  {
    path: "discernments",
    component: DiscernPageComponent,
  },
  { path: "discernment-detail/:id", component: DiscernDetailComponent },
];
@NgModule({
  declarations: [DiscernListComponent, DiscernPageComponent, DiscernDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatProgressSpinnerModule,
    SharedModule,
    SharedLibraryModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [DiscernListComponent],
})
export class DiscernPageModule {}
