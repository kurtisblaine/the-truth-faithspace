import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatTableModule } from "@angular/material/table";

type TableData = {
  name: string;
  width: string;
  length: string;
};

const TABLE_DATA: TableData[] = [
  { name: "Small", width: "", length: "" },
  { name: "Medium", width: "", length: "" },
  { name: "Large", width: "", length: "" },
  { name: "X-Large", width: "", length: "" },
  { name: "2X-Large", width: "", length: "" },
];

@Component({
  selector: "app-sizing-dialog",
  imports: [MatTableModule, MatDialogModule],
  template: `
    <h1 mat-dialog-title>Size Guide</h1>
    <mat-dialog-content>
      <table mat-table [dataSource]="dataSource" class="mat-elevation-z8 demo-table">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let element">{{ element.name }}</td>
        </ng-container>

        <ng-container matColumnDef="width">
          <th mat-header-cell *matHeaderCellDef>Width</th>
          <td mat-cell *matCellDef="let element">{{ element.width }}</td>
        </ng-container>

        <ng-container matColumnDef="length">
          <th mat-header-cell *matHeaderCellDef>Length</th>
          <td mat-cell *matCellDef="let element">{{ element.length }}</td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </mat-dialog-content>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SizingDialogComponent {
  public displayedColumns: string[] = ["name", "width", "length"];
  public dataSource = [...TABLE_DATA];
}
