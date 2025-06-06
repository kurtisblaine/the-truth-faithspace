import { NgModule } from "@angular/core";
import { NewHeartComponent } from "../call-faith/new-heart.component";
import { EternalRewardComponent } from "./eternal-reward.component";
import { EverlastingLifeComponent } from "./everlasting-life.component";
import { NewHeavenEarthComponent } from "./new-heaven-earth.component";
import { ResurrectionComponent } from "./resurrection.component";
import { SpiritualBodyComponent } from "./spiritual-body.component";

const hopeLifeComponents = [
  EternalRewardComponent,
  EverlastingLifeComponent,
  NewHeartComponent,
  ResurrectionComponent,
  SpiritualBodyComponent,
  NewHeavenEarthComponent,
];

@NgModule({
  imports: hopeLifeComponents,
  exports: hopeLifeComponents,
})
export class HopeLifeModule {}
