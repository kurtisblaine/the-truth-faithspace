import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AudioPlayComponent } from "./components/audio-play/audio-play.component";
import { LinkComponent } from "./components/link-redirect/link.component";
import { NagivationHeaderComponent } from "./components/navigation-header/nagivation-header.component";
import { ReferenceTooltipComponent } from "./components/reference-tooltip/reference-tooltip.component";
import { ScriptService } from "./service/script.service";

@NgModule({
  declarations: [ReferenceTooltipComponent, AudioPlayComponent, NagivationHeaderComponent, LinkComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    FormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  providers: [ScriptService],
  exports: [ReferenceTooltipComponent, AudioPlayComponent, NagivationHeaderComponent, LinkComponent],
})
export class SharedModule {}
