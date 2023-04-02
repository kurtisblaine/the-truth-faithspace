import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { PsalmListComponent } from "./psalm-list/psalm-list.component";
import { PsalmPageComponent } from "./psalm-page.component";

@NgModule({
  declarations: [PsalmPageComponent, PsalmListComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    MatDividerModule,
    MatButtonModule,
  ],
  exports: [PsalmListComponent],
})
export class PsalmPageModule {}
