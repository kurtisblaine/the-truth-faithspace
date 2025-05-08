import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { RouterModule, Routes } from "@angular/router";
import { SharedLibraryModule } from "shared";
import { SharedModule } from "../shared/shared.module";
import { AbideComponent } from "./gospel-content/call-faith/abide.component";
import { BornAgainComponent } from "./gospel-content/call-faith/born-again.component";
import { ClearConscienceComponent } from "./gospel-content/call-faith/clear-conscience.component";
import { NewHeartComponent } from "./gospel-content/call-faith/new-heart.component";
import { RunTheRaceComponent } from "./gospel-content/call-faith/run-the-race.component";
import { BronzeSerpentComponent } from "./gospel-content/call-grace/bronze-serpent.component";
import { FoodDrinkComponent } from "./gospel-content/call-grace/food-drink.component";
import { LambComponent } from "./gospel-content/call-grace/lamb.component";
import { LionComponent } from "./gospel-content/call-grace/lion.component";
import { RockComponent } from "./gospel-content/call-grace/rock.component";
import { SalvationComponent } from "./gospel-content/call-grace/salvation.component";
import { ScapegoatComponent } from "./gospel-content/call-grace/scapegoat.component";
import { ServantComponent } from "./gospel-content/call-grace/servant.component";
import { SonComponent } from "./gospel-content/call-grace/son.component";
import { VictorComponent } from "./gospel-content/call-grace/victor.component";
import { DeathComponent } from "./gospel-content/danger-death/death.component";
import { PleasureComponent } from "./gospel-content/danger-death/pleasure.component";
import { ToilComponent } from "./gospel-content/danger-death/toil.component";
import { WealthComponent } from "./gospel-content/danger-death/wealth.component";
import { ConsumingFireComponent } from "./gospel-content/danger-sin/consuming-fire.component";
import { HeKnowsComponent } from "./gospel-content/danger-sin/he-knows.component";
import { JudgementDayComponent } from "./gospel-content/danger-sin/judgement-day.component";
import { SinNatureComponent } from "./gospel-content/danger-sin/sin-nature.component";
import { EternalRewardComponent } from "./gospel-content/hope-life/eternal-reward.component";
import { EverlastingLifeComponent } from "./gospel-content/hope-life/everlasting-life.component";
import { NewHeavenEarthComponent } from "./gospel-content/hope-life/new-heaven-earth.component";
import { ResurrectionComponent } from "./gospel-content/hope-life/resurrection.component";
import { SpiritualBodyComponent } from "./gospel-content/hope-life/spiritual-body.component";
import { BaptismComponent } from "./gospel-content/response/baptism.component";
import { BelieveInGodComponent } from "./gospel-content/response/believe-in-God.component";
import { CallUponHimComponent } from "./gospel-content/response/call-upon-Him.component";
import { HolinessComponent } from "./gospel-content/response/holiness.component";
import { PersevereComponent } from "./gospel-content/response/persevere.component";
import { RepentComponent } from "./gospel-content/response/repent.component";
import { WorthyOfCallComponent } from "./gospel-content/response/worthy-of-call.component";
import { GospelHeaderComponent } from "./gospel-header/gospel-header.component";
import { GospelItemComponent } from "./gospel-item/gospel-item.component";
import { GospelSectionComponent } from "./gospel-section/gospel-section.component";
import { GospelComponent } from "./gospel.component";
import { RouterService } from "./router.service";
import { TemplateService } from "./template.service";

const routes: Routes = [
  {
    path: "truth",
    component: GospelComponent,
  },
  {
    path: "truthful-item/:title",
    component: GospelItemComponent,
  },
];

const dangerSinComponents = [SinNatureComponent, HeKnowsComponent, ConsumingFireComponent, JudgementDayComponent];
const dangerDeathComponents = [PleasureComponent, ToilComponent, WealthComponent, DeathComponent];
const callGraceComponents = [
  ServantComponent,
  RockComponent,
  LambComponent,
  SalvationComponent,
  LionComponent,
  ScapegoatComponent,
  FoodDrinkComponent,
  BronzeSerpentComponent,
  VictorComponent,
  SonComponent,
];
const callFaithComponents = [
  RunTheRaceComponent,
  ClearConscienceComponent,
  AbideComponent,
  NewHeartComponent,
  BornAgainComponent,
];
const responseComponents = [
  RepentComponent,
  BaptismComponent,
  HolinessComponent,
  CallUponHimComponent,
  WorthyOfCallComponent,
  PersevereComponent,
  BelieveInGodComponent,
];
const hopeLifeComponents = [
  EternalRewardComponent,
  EverlastingLifeComponent,
  NewHeartComponent,
  ResurrectionComponent,
  SpiritualBodyComponent,
  NewHeavenEarthComponent,
];

@NgModule({
  declarations: [GospelComponent, GospelItemComponent, GospelSectionComponent, GospelHeaderComponent],
  imports: [
    CommonModule,
    SharedModule,
    SharedLibraryModule,
    MatButtonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatExpansionModule,
    ...dangerSinComponents,
    ...dangerDeathComponents,
    ...callGraceComponents,
    ...callFaithComponents,
    ...responseComponents,
    ...hopeLifeComponents,
  ],
  providers: [TemplateService, RouterService],
})
export class GospelPageModule {}
