import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { ReadonlyTextEditorComponent } from "shared";
import { PageHeaderComponent } from "../shared/components/page-header.component";
import { InsightDetailComponent } from "./insight-detail/insight-detail.component";
import { InsightListComponent } from "./insight-list/insight-list.component";
import { InsightPageComponent } from "./insight-page.component";
const routes: Routes = [
  {
    path: "",
    component: InsightPageComponent,
  },
  { path: "insight-detail/:id", component: InsightDetailComponent },
];
@NgModule({
  declarations: [InsightPageComponent, InsightDetailComponent],
  imports: [
    CommonModule,
    InsightListComponent,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    PageHeaderComponent,
    ReadonlyTextEditorComponent,
  ],
})
export class InsightPageModule {}
