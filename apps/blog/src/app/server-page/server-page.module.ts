import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { RouterModule, Routes } from "@angular/router";
import { BlogPageModule } from "../blog-page/blog-page.module";
import { DiscernPageModule } from "../discern-page/discern-page.module";
import { ProverbModule } from "../proverb-page/proverb.module";
import { PsalmPageModule } from "../psalm-page/psalm-page.module";
import { SharedModule } from "../shared/shared.module";
import { ServerPageComponent } from "./server-page.component";

const routes: Routes = [
  {
    path: "server/f3bc7c75-cdf7-4c51-beab-3ef81d6a5e5c",
    component: ServerPageComponent,
  },
];
@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    RouterModule.forChild(routes),
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
