import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
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
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [ContactService],
  // exports: [EmailPageComponent],
  // exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class EmailPageModule {}
