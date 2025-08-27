import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent, ShareComponent } from "shared";
import { ContactService } from "../../../../../libs/src/lib/shared/components/contact-form/contact.service";
import { EmailPageComponent } from "./email-page.component";

const routes: Routes = [
  {
    path: "",
    component: EmailPageComponent,
  },
];

@NgModule({
  declarations: [EmailPageComponent],
  imports: [RouterModule.forChild(routes), CommonModule, MatCardModule, ContactFormComponent, ShareComponent],
  providers: [ContactService],
})
export class EmailPageModule {}
