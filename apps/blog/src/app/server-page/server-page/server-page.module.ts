import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ServerPageComponent } from "./server-page.component";
import { SharedModule } from "../../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ServerPageModule {}
