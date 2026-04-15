import { CommonModule, NgOptimizedImage } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterModule, Routes } from "@angular/router";
import { NarratorComponent, ShareComponent } from "shared";
import { PageHeaderComponent } from "../shared/components/page-header.component";
import { ReferenceTooltipComponent } from "../shared/components/reference-tooltip/reference-tooltip.component";
import { FullpageDirective } from "../shared/directives/fullpage.directive";
import { DashToTitlePipe } from "../shared/pipes/dash-title.pipe";
import { CallFaithModule } from "./gospel-content/call-faith/call-faith.module";
import { CallGraceModule } from "./gospel-content/call-grace/call-grace.module";
import { DangerDeathModule } from "./gospel-content/danger-death/danger-death.module";
import { DangerSinModule } from "./gospel-content/danger-sin/danger-sin.module";
import { HopeLifeModule } from "./gospel-content/hope-life/hope-life.module";
import { ResponseModule } from "./gospel-content/response/response.module";
import { GospelItemComponent } from "./gospel-item/gospel-item.component";
import { GospelPageComponent } from "./gospel-page.component";
import { GospelSectionComponent } from "./gospel-section/gospel-section.component";

const routes: Routes = [
  {
    path: "",
    component: GospelPageComponent,
  },
  {
    path: "truthful-item/:page",
    component: GospelItemComponent,
  },
];

@NgModule({
  declarations: [GospelPageComponent, GospelItemComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    ShareComponent,
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
    DashToTitlePipe,
    PageHeaderComponent,
    MatMenuModule,
  ],
  providers: [],
})
export class GospelPageModule {}
