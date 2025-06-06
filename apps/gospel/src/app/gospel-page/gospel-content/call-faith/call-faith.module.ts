import { NgModule } from "@angular/core";
import { AbideComponent } from "./abide.component";
import { BornAgainComponent } from "./born-again.component";
import { ClearConscienceComponent } from "./clear-conscience.component";
import { NewHeartComponent } from "./new-heart.component";
import { RunTheRaceComponent } from "./run-the-race.component";

const callFaithComponents = [
  RunTheRaceComponent,
  ClearConscienceComponent,
  AbideComponent,
  NewHeartComponent,
  BornAgainComponent,
];

@NgModule({
  imports: callFaithComponents,
  exports: callFaithComponents,
})
export class CallFaithModule {}
