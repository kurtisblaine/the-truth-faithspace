import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxEditorModule } from "ngx-editor";
import { TextEditorComponent } from "./components/text-editor/text-editor.component";

@NgModule({
  declarations: [TextEditorComponent],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    NgxEditorModule.forRoot(),
    ReactiveFormsModule,
    MatTooltipModule,
  ],
  exports: [TextEditorComponent],
})
export class SharedModule {}
