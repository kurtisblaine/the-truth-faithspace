import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import { StudyDetailComponent } from "./study-detail/study-detail.component";
import { StudyListComponent } from "./study-list/study-list.component";
import { StudyPageComponent } from "./study-page.component";

const routes: Routes = [
  {
    path: "studies",
    component: StudyPageComponent,
  },
  { path: "study-detail/:id", component: StudyDetailComponent },
];
@NgModule({
  declarations: [StudyDetailComponent, StudyListComponent, StudyPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    SharedLibraryModule,
  ],
  exports: [StudyListComponent],
})
export class StudyPageModule {}
