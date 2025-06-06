import { NgModule } from "@angular/core";
import { DeathComponent } from "./death.component";
import { PleasureComponent } from "./pleasure.component";
import { ToilComponent } from "./toil.component";
import { WealthComponent } from "./wealth.component";

const dangerDeathComponents = [PleasureComponent, ToilComponent, WealthComponent, DeathComponent];

@NgModule({
  imports: dangerDeathComponents,
  exports: dangerDeathComponents,
})
export class DangerDeathModule {}
