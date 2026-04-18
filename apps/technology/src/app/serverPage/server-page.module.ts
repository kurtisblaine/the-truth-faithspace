import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TextEditorComponent } from "shared";
import { ItemListComponent } from "../itemsPage/item-list/item-list.component";
import { ItemsModule } from "../itemsPage/items-page.module";

@NgModule({
  imports: [
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTooltipModule,
    ItemsModule,
    TextEditorComponent,
    MatSnackBarModule,
    MatFormFieldModule,
    ItemListComponent,
    MatCardModule,
  ],
})
export class ServerModule {}
