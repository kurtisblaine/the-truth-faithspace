import { CommonModule } from "@angular/common";
import { ChangeDetectionStrategy, Component, output, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "lib-filter",
  imports: [MatCardModule, MatFormFieldModule, FormsModule, MatInputModule, MatButtonModule, CommonModule],
  template: `<mat-card class="filter-card">
    <mat-card-header style="margin-bottom: 15px">
      <mat-card-title class="mat-card-filter-header">
        <span class="primary"> Filter</span>
        <button class="reset-button" mat-button *ngIf="searchTerm" (click)="onChange.emit(''); searchTerm = ''">
          RESET
        </button>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <mat-form-field appearance="outline" style="width: 100%">
        <mat-label>Search</mat-label>
        <input
          type="text"
          subscriptSizing="dynamic"
          matInput
          (ngModelChange)="onChange.emit($event)"
          [(ngModel)]="searchTerm"
        />
      </mat-form-field>
    </mat-card-content>
  </mat-card>`,
  styles: `
.mat-mdc-card-header-text {
  width: 100%;
}

.mat-card-filter-header {
  display: flex !important; align-items: baseline; justify-content: space-between;
  height: 28px;
}

.filter-card {
  width: 100%;
  margin: 15px;
}

.reset-button {
  color: var(--mat-sys-error) !important;
    height: 28px;
}
`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FilterComponent {
  public searchTerm = "";

  public onChange = output<string>();
}
