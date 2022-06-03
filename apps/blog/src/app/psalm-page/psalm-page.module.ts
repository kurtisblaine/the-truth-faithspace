import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PsalmItemComponent } from "./psalm-item/psalm-item.component";
import { PsalmPageComponent } from "./psalm-page.component";
import { PsalmListComponent } from "./psalm-list/psalm-list.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [PsalmPageComponent, PsalmItemComponent, PsalmListComponent],
  imports: [CommonModule, SharedModule, RouterModule, MatDividerModule],
})
export class PsalmPageModule {}
