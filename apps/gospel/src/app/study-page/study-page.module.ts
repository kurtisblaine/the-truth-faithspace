import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { TextEditorComponent } from "shared";
import { FirebaseModule } from "../firebase.module";
import { StudyDetailComponent } from "./study-detail/study-detail.component";
import { StudyListComponent } from "./study-list/study-list.component";
import { StudyPageComponent } from "./study-page.component";

const routes: Routes = [
  {
    path: "",
    component: StudyPageComponent,
  },
  { path: "study-detail/:id", component: StudyDetailComponent },
];
@NgModule({
  declarations: [StudyDetailComponent, StudyPageComponent],
  imports: [
    FirebaseModule,
    CommonModule,
    StudyListComponent,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    TextEditorComponent,
  ],
  exports: [StudyListComponent],
})
export class StudyPageModule {}
