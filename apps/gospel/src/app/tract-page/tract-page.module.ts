import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { RouterModule, Routes } from "@angular/router";
import { LibFaIconComponent, LinkComponent } from "shared";
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
    MatProgressBarModule,
    PageHeaderComponent,
    LibFaIconComponent,
  ],
})
export class TractPageModule {}
