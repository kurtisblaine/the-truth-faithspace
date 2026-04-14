import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { RouterModule, Routes } from "@angular/router";
import { LinkComponent } from "shared";
import { PageHeaderComponent } from "../shared/components/page-header.component";
import { TractPageComponent } from "./tract-page.component";
const routes: Routes = [
  {
    path: "",
    component: TractPageComponent,
  },
];

@NgModule({
  declarations: [TractPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatListModule,
    NgOptimizedImage,
    LinkComponent,
    PageHeaderComponent,
  ],
})
export class TractPageModule {}
