import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule, Routes } from "@angular/router";
import { ReadonlyTextEditorComponent } from "shared";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { ItemsComponent } from "./items.component";

const routes: Routes = [
  {
    path: "",
    component: ItemsComponent,
  },
  { path: "item-detail/:id", component: ItemDetailComponent },
];

@NgModule({
  declarations: [ItemDetailComponent, ItemsComponent],
  imports: [
    CommonModule,
    ItemListComponent,
    RouterModule.forChild(routes),
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatCardModule,
    ReadonlyTextEditorComponent,
  ],
})
export class ItemsModule {}
