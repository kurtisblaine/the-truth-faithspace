import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import { InsightDetailComponent } from "./insight-detail/insight-detail.component";
import { InsightListComponent } from "./insight-list/insight-list.component";
import { InsightPageComponent } from "./insight-page.component";
const routes: Routes = [
  {
    path: "insights",
    component: InsightPageComponent,
  },
  { path: "insight-detail/:id", component: InsightDetailComponent },
];
@NgModule({
  declarations: [InsightPageComponent, InsightListComponent, InsightDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SharedLibraryModule,
  ],
  exports: [InsightListComponent],
})
export class InsightModule {}
