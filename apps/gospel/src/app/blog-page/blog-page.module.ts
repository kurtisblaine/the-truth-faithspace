import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { ReadonlyTextEditorComponent } from "shared";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogPageComponent } from "./blog-page.component";
const routes: Routes = [
  {
    path: "",
    component: BlogPageComponent,
  },
  { path: "edify-detail/:id", component: BlogDetailComponent },
];
@NgModule({
  declarations: [BlogPageComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    BlogListComponent,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReadonlyTextEditorComponent,
  ],
})
export class BlogPageModule {}
