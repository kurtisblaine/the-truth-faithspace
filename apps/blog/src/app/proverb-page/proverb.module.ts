import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProverbListComponent } from "./proverb-list/proverb-list.component";
import { ProverbPageComponent } from "./proverb-page.component";
const routes: Routes = [
  {
    path: "proverbs",
    component: ProverbPageComponent,
  },
];
@NgModule({
  declarations: [ProverbPageComponent, ProverbListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [ProverbListComponent],
})
export class ProverbModule {}
