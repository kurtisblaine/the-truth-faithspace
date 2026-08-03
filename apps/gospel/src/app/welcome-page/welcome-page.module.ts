import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { LibFaIconComponent, LinkComponent, NarratorComponent } from "shared";
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
    LibFaIconComponent,
    MatProgressBarModule,
    MatTooltipModule,
    NarratorComponent,
  ],
})
export class WelcomePageModule {}
