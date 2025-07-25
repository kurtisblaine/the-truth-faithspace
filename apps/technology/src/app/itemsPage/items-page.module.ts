import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatTooltipModule } from "@angular/material/tooltip";
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { ReadonlyTextEditorComponent, TextEditorComponent } from "../../../../../libs/src";
import { LinkComponent } from "../shared/link.component";
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
  declarations: [ItemListComponent, ItemDetailComponent, ItemsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    TextEditorComponent,
    ReadonlyTextEditorComponent,
    MatCardModule,
    LinkComponent,
    RouterModule.forChild(routes),
  ],
  exports: [ItemListComponent],
})
export class ItemsModule {}
