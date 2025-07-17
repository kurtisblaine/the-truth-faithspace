import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule, Routes } from "@angular/router";
import { NarratorComponent } from "shared";
import { ReferenceTooltipComponent } from "../shared/components/reference-tooltip/reference-tooltip.component";
import { FullpageDirective } from "../shared/directives/fullpage.directive";
import { CallFaithModule } from "./gospel-content/call-faith/call-faith.module";
import { CallGraceModule } from "./gospel-content/call-grace/call-grace.module";
import { DangerDeathModule } from "./gospel-content/danger-death/danger-death.module";
import { DangerSinModule } from "./gospel-content/danger-sin/danger-sin.module";
import { HopeLifeModule } from "./gospel-content/hope-life/hope-life.module";
import { ResponseModule } from "./gospel-content/response/response.module";
import { GospelPageComponent } from "./gospel-page.component";
import { GospelSectionComponent } from "./gospel-section/gospel-section.component";

const routes: Routes = [
  {
    path: "",
    component: GospelPageComponent,
  },
];

@NgModule({
  declarations: [GospelPageComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatExpansionModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    DangerSinModule,
    DangerDeathModule,
    CallGraceModule,
    CallFaithModule,
    ResponseModule,
    HopeLifeModule,
    NarratorComponent,
    ReferenceTooltipComponent,
    NgOptimizedImage,
    FullpageDirective,
    GospelSectionComponent,
  ],
  providers: [],
})
export class GospelPageModule {}
