import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxEditorModule } from "ngx-editor";
import { AudioPlayComponent } from "./components/audio-play/audio-play.component";
import { NagivationHeaderComponent } from "./components/navigation-header/nagivation-header.component";
import { ReferenceTooltipComponent } from "./components/reference-tooltip/reference-tooltip.component";
import { TextEditorComponent } from "./components/text-editor/text-editor.component";
import { ScriptService } from "./service/script.service";

@NgModule({
  declarations: [TextEditorComponent, ReferenceTooltipComponent, AudioPlayComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    FormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    NgxEditorModule.forRoot(),
    ReactiveFormsModule,
    MatTooltipModule,
    NagivationHeaderComponent,
  ],
  providers: [ScriptService],
  exports: [TextEditorComponent, ReferenceTooltipComponent, AudioPlayComponent, NagivationHeaderComponent],
})
export class SharedModule {}
