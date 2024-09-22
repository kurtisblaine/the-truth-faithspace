import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { PsalmDetailComponent } from "./psalm-detail/psalm-detail.component";
import { PsalmListComponent } from "./psalm-list/psalm-list.component";
import { PsalmPageComponent } from "./psalm-page.component";
const routes: Routes = [
  {
    path: "psalms",
    component: PsalmPageComponent,
  },
  { path: "psalm-detail/:id", component: PsalmDetailComponent },
];
@NgModule({
  declarations: [PsalmPageComponent, PsalmListComponent, PsalmDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
  ],
  exports: [PsalmListComponent],
})
export class PsalmPageModule {}
