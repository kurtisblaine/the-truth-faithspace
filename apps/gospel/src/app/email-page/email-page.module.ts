import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { RouterModule, Routes } from "@angular/router";
import { ContactFormComponent, ContactService, ShareComponent } from "shared";
import { PageHeaderComponent } from "../shared/components/page-header.component";
import { EmailPageComponent } from "./email-page.component";

const routes: Routes = [
  {
    path: "",
    component: EmailPageComponent,
  },
];

@NgModule({
  declarations: [EmailPageComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatCardModule,
    ContactFormComponent,
    ShareComponent,
    PageHeaderComponent,
  ],
  providers: [ContactService],
})
export class EmailPageModule {}
