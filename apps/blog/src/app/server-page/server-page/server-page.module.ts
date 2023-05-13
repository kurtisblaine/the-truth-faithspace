import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { BlogPageModule } from "../../blog-page/blog-page.module";
import { ProverbModule } from "../../proverb-page/proverb.module";
import { PsalmPageModule } from "../../psalm-page/psalm-page.module";
import { SharedModule } from "../../shared/shared.module";
import { ServerPageComponent } from "./server-page.component";

@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PsalmPageModule,
    ProverbModule,
    BlogPageModule,
  ],
})
export class ServerPageModule {}
