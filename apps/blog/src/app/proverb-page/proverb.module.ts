import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProverbDetailComponent } from "./proverb-detail/proverb-detail.component";
import { ProverbListComponent } from "./proverb-list/proverb-list.component";
import { ProverbPageComponent } from "./proverb-page.component";
const routes: Routes = [
  {
    path: "proverbs",
    component: ProverbPageComponent,
  },
  { path: "proverb-detail/:id", component: ProverbDetailComponent },
];
@NgModule({
  declarations: [
    ProverbPageComponent,
    ProverbListComponent,
    ProverbDetailComponent,
  ],
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
