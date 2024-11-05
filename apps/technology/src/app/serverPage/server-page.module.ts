import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ItemsModule } from "../itemsPage/items-page.module";
import { SharedModule } from "../shared/shared.module";
import { ServerPageComponent } from "./server-page.component";

const routes: Routes = [
  {
    path: "server",
    component: ServerPageComponent,
  },
];

@NgModule({
  declarations: [ServerPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTooltipModule,
    ItemsModule,
    RouterModule.forChild(routes),
  ],
})
export class ServerModule {}
