import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxEditorModule } from "ngx-editor";
import { ReferenceTooltipComponent } from "./components/reference-tooltip/reference-tooltip.component";
import { TextEditorComponent } from "./components/text-editor/text-editor.component";

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
