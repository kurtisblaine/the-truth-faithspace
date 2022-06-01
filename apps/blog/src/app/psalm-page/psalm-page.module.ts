import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PsalmItemComponent } from "./psalm-item/psalm-item.component";
import { PsalmPageComponent } from "./psalm-page.component";
import { PsalmListComponent } from "./psalm-list/psalm-list.component";

@NgModule({
  declarations: [PsalmPageComponent, PsalmItemComponent, PsalmListComponent],
  imports: [CommonModule],
})
export class PsalmPageModule {}
