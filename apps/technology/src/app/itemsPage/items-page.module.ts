import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { SharedLibraryModule } from "../../../../../libs/src";
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
    SharedLibraryModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
  ],
  exports: [ItemListComponent],
})
export class ItemsModule {}
