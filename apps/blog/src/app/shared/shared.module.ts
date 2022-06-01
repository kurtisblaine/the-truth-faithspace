import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
  declarations: [ToolbarComponent],
  imports: [CommonModule, FontAwesomeModule, MatToolbarModule, MatButtonModule],
  exports: [ToolbarComponent],
})
export class SharedModule {}
