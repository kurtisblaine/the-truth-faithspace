import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogPageComponent } from "./blog-page.component";
const routes: Routes = [
  {
    path: "edifications",
    component: BlogPageComponent,
  },
  { path: "edify-detail/:id", component: BlogDetailComponent },
];
@NgModule({
  declarations: [BlogPageComponent, BlogListComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    SharedModule,
    MatProgressSpinnerModule,
    SharedLibraryModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ],
  exports: [BlogListComponent],
})
export class BlogPageModule {}
