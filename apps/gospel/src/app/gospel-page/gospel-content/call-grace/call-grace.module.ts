import { NgModule } from "@angular/core";
import { BronzeSerpentComponent } from "./bronze-serpent.component";
import { FoodDrinkComponent } from "./food-drink.component";
import { LambComponent } from "./lamb.component";
import { LionComponent } from "./lion.component";
import { RockComponent } from "./rock.component";
import { SalvationComponent } from "./salvation.component";
import { ScapegoatComponent } from "./scapegoat.component";
import { ServantComponent } from "./servant.component";
import { SonComponent } from "./son.component";
import { VictorComponent } from "./victor.component";

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

@NgModule({
  imports: callGraceComponents,
  exports: callGraceComponents,
})
export class CallGraceModule {}
