import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import { PsalmDetailComponent } from "./psalm-detail/psalm-detail.component";
import { PsalmListComponent } from "./psalm-list/psalm-list.component";
import { PsalmPageComponent } from "./psalm-page.component";

const routes: Routes = [
  {
    path: "",
    component: PsalmPageComponent,
  },
  { path: "poem-detail/:id", component: PsalmDetailComponent },
];

@NgModule({
  declarations: [PsalmPageComponent, PsalmDetailComponent],
  imports: [
    CommonModule,
    PsalmListComponent,
    SharedModule,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    SharedLibraryModule,
    MatCardModule,
  ],
  exports: [],
})
export class PsalmPageModule {}
