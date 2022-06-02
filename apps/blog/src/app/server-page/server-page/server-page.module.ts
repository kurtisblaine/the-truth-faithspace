import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServerPageComponent } from "./server-page.component";
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ServerPageComponent],
  imports: [CommonModule, SharedModule, MatButtonModule],
})
export class ServerPageModule {}
