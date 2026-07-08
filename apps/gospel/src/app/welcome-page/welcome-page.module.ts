import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { RouterModule, Routes } from "@angular/router";
import { LinkComponent } from "shared";
import { WelcomePageComponent } from "./welcome-page.component";

const routes: Routes = [
  {
    path: "",
    component: WelcomePageComponent,
  },
];

@NgModule({
  declarations: [WelcomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgOptimizedImage,
    MatDividerModule,
    MatButtonModule,
    LinkComponent,
  ],
})
export class WelcomePageModule {}
