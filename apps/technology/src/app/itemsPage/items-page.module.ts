import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedModule } from "../shared/shared.module";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemsComponent } from "./items.component";

const routes: Routes = [
  {
    path: "items",
    component: ItemsComponent,
  },
  { path: "item-detail/:id", component: ItemDetailComponent },
];
@NgModule({
  declarations: [ItemListComponent, ItemDetailComponent, ItemsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    FontAwesomeModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatTooltipModule,
    RouterModule.forChild(routes),
  ],
})
export class ItemsModule {}
