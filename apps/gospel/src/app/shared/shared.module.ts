import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { LinkComponent } from "./components/link-redirect/link.component";
import { ReferenceTooltipComponent } from "./components/reference-tooltip/reference-tooltip.component";

@NgModule({
  declarations: [ReferenceTooltipComponent, LinkComponent],
  imports: [CommonModule],
  exports: [ReferenceTooltipComponent, LinkComponent],
})
export class SharedModule {}
