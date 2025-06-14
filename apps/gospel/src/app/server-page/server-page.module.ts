import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { RouterModule, Routes } from "@angular/router";
import { TextEditorComponent } from "shared";
import { BlogListComponent } from "../blog-page/blog-list/blog-list.component";
import { DiscernListComponent } from "../discern-page/discern-list/discern-list.component";
import { InsightListComponent } from "../insight-page/insight-list/insight-list.component";
import { PsalmListComponent } from "../psalm-page/psalm-list/psalm-list.component";
import { StudyListComponent } from "../study-page/study-list/study-list.component";
import { ServerPageComponent } from "./server-page.component";

const routes: Routes = [
  {
    path: "f3bc7c75-cdf7-4c51-beab-3ef81d6a5e5c",
    component: ServerPageComponent,
  },
];
@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MatExpansionModule,
    CommonModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PsalmListComponent,
    BlogListComponent,
    DiscernListComponent,
    StudyListComponent,
    InsightListComponent,
    TextEditorComponent,
  ],
})
export class ServerPageModule {}
