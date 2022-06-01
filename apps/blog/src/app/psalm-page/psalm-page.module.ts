import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PsalmItemComponent } from "./psalm-item/psalm-item.component";
import { PsalmPageComponent } from "./psalm-page.component";
import { PsalmListComponent } from "./psalm-list/psalm-list.component";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [PsalmPageComponent, PsalmItemComponent, PsalmListComponent],
  imports: [CommonModule, SharedModule, RouterModule],
})
export class PsalmPageModule {}
