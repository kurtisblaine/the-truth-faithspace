import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MatListModule } from "@angular/material/list";
import { LinkPageComponent } from "./link-page.component";
const routes: Routes = [
  {
    path: "resource",
    component: LinkPageComponent,
  },
];

@NgModule({
  declarations: [LinkPageComponent],
  imports: [CommonModule, MatListModule, RouterModule.forChild(routes)],
})
export class LinkPageModule {}
