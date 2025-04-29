import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NgxEditorModule } from "ngx-editor";
import { NarratorComponent } from "./components/narrator/narrator.component";
import { TextEditorComponent } from "./components/text-editor/text-editor.component";
import { TooltipDirective } from "./directives/tooltip.directive";

@NgModule({
  declarations: [TooltipDirective, TextEditorComponent, NarratorComponent],
  imports: [
    CommonModule,
    MatTooltipModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgxEditorModule.forRoot(),
    MatButtonModule,
    MatButtonToggleModule,
    FormsModule,
    MatSnackBarModule,
  ],
  exports: [TooltipDirective, TextEditorComponent, NarratorComponent],
})
export class SharedLibraryModule {}
