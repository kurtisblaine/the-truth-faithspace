import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { TextEditorComponent } from "../../../../../libs/src";
import { ItemsModule } from "../itemsPage/items-page.module";
import { ServerPageComponent } from "./server-page.component";

const routes: Routes = [
  {
    path: "server/777c7c75-cdf7-4c51-beab-3ef81d6a5777",
    component: ServerPageComponent,
  },
];

@NgModule({
  declarations: [ServerPageComponent],
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
    RouterModule.forChild(routes),
  ],
})
export class ServerModule {}
