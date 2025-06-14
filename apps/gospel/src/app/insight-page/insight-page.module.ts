import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { TextEditorComponent } from "shared";
import { FirebaseModule } from "../firebase.module";
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
    TextEditorComponent,
    FirebaseModule,
  ],
  exports: [InsightListComponent],
})
export class InsightPageModule {}
