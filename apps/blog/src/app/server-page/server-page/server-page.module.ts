import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { BlogPageModule } from "../../blog-page/blog-page.module";
import { DiscernPageModule } from "../../discern-page/discern-page.module";
import { ProverbModule } from "../../proverb-page/proverb.module";
import { PsalmPageModule } from "../../psalm-page/psalm-page.module";
import { SharedModule } from "../../shared/shared.module";
import { ServerPageComponent } from "./server-page.component";

@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    MatExpansionModule,
    CommonModule,
    SharedModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PsalmPageModule,
    ProverbModule,
    BlogPageModule,
    DiscernPageModule,
  ],
})
export class ServerPageModule {}
