import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { TextEditorComponent } from "./components/text-editor/text-editor.component";
import { NgxEditorModule } from "ngx-editor";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ToolbarComponent, TextEditorComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatButtonModule,
    NgxEditorModule,
    ReactiveFormsModule,
  ],
  exports: [ToolbarComponent, TextEditorComponent],
})
export class SharedModule {}
