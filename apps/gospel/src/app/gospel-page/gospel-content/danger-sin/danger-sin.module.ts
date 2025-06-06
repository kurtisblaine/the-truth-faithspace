import { NgModule } from "@angular/core";
import { ConsumingFireComponent } from "./consuming-fire.component";
import { HeKnowsComponent } from "./he-knows.component";
import { JudgementDayComponent } from "./judgement-day.component";
import { SinNatureComponent } from "./sin-nature.component";

const dangerSinComponents = [SinNatureComponent, HeKnowsComponent, ConsumingFireComponent, JudgementDayComponent];

@NgModule({
  imports: dangerSinComponents,
  exports: dangerSinComponents,
})
export class DangerSinModule {}
