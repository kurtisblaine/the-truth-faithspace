import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { BlogPageComponent } from "./blog-page.component";
const routes: Routes = [
  {
    path: "blogs",
    component: BlogPageComponent,
  },
];
@NgModule({
  declarations: [BlogPageComponent, BlogListComponent],
  imports: [
    CommonModule,
    MatDividerModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatButtonModule,
  ],
  exports: [BlogListComponent],
})
export class BlogPageModule {}
