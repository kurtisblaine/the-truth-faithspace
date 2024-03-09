import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { RouterModule, Routes } from "@angular/router";
import { ContactService } from "./contact.service";
import { EmailPageComponent } from "./email-page.component";

const routes: Routes = [
  {
    path: "email",
    component: EmailPageComponent,
  },
];

@NgModule({
  declarations: [EmailPageComponent],
  imports: [
    RouterModule.forChild(routes),
    MatButtonModule,
    MatSnackBarModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [ContactService],
})
export class EmailPageModule {}
