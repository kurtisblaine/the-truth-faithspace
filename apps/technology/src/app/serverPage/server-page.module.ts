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
import { RouterModule, Routes } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AuthGuard, TextEditorComponent } from "../../../../../libs/src";
import { ItemsModule } from "../itemsPage/items-page.module";
import { LoginComponent } from "./loginPage/login-page.component";
import { ServerPageComponent } from "./server-page.component";

const routes: Routes = [
  {
    path: "777c7c75-cdf7-4c51-beab-3ef81d6a5777",
    component: ServerPageComponent,
    title: "LIVE DATA! | Beware of Idols",
    canActivate: [AuthGuard],
  },
  {
    path: "",
    component: LoginComponent,
    title: "Server | Beware of Idols",
  },
];

@NgModule({
  declarations: [ServerPageComponent, LoginComponent],
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
    MatCardModule,
    RouterModule.forChild(routes),
  ],
})
export class ServerModule {}
