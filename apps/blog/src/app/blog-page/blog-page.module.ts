import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BlogPageComponent } from "./blog-page.component";
import { BlogListComponent } from "./blog-list/blog-list.component";
import { MatDividerModule } from "@angular/material/divider";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [BlogPageComponent, BlogListComponent],
  imports: [CommonModule, MatDividerModule, SharedModule, RouterModule],
})
export class BlogPageModule {}
