import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { BrowserModule } from "@angular/platform-browser";
import { ContactService } from "./contact.service";
import { EmailPageComponent } from "./email-page.component";
@NgModule({
  declarations: [EmailPageComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [ContactService],
  exports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class EmailPageModule {}
