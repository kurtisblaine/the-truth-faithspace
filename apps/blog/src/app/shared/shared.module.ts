import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { TextEditorComponent } from "./components/text-editor/text-editor.component";
import { NgxEditorModule } from "ngx-editor";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReferenceTooltipComponent } from "./components/reference-tooltip/reference-tooltip.component";
import { MatTooltipModule } from "@angular/material/tooltip";

@NgModule({
  declarations: [TextEditorComponent, ReferenceTooltipComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    NgxEditorModule,
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  exports: [TextEditorComponent, ReferenceTooltipComponent],
})
export class SharedModule {}
