import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { ProverbListComponent } from "./proverb-list/proverb-list.component";
import { ProverbPageComponent } from "./proverb-page.component";

@NgModule({
  declarations: [ProverbPageComponent, ProverbListComponent],
  imports: [CommonModule, SharedModule, RouterModule, MatDividerModule],
  exports: [ProverbListComponent],
})
export class ProverbModule {}
