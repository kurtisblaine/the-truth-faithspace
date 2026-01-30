import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";

import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { MatTooltipModule } from "@angular/material/tooltip";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { Store } from "@ngrx/store";
import { toHTML } from "ngx-editor";
import { TextEditorComponent } from "shared";
import { v4 } from "uuid";
import { ItemsActions } from "../+state/items/items.actions";
import { ItemEntity } from "../+state/items/items.reducer";
import { ItemListComponent } from "../blogPage/blog-list/blog-list.component";
@Component({
  selector: "app-server-page",
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<button mat-flat-button (click)="saveItems()">Post Item</button>

    <div style="display: flex; flex-direction: column; margin: 10px">
      <mat-form-field appearance="outline">
        <mat-label>Title</mat-label>
        <input matInput type="text" [(ngModel)]="title" required />
      </mat-form-field>

      <lib-text-editor (editorChanged)="onChange($event)"></lib-text-editor>
    </div>

    <mat-accordion class="example-headers-align" multi>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title> Items </mat-panel-title>
        </mat-expansion-panel-header>
        <ng-template matExpansionPanelContent>
          <app-item-list [update]="true"></app-item-list>
        </ng-template> </mat-expansion-panel
    ></mat-accordion>`,
  styles: ``,
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
    TextEditorComponent,
    ItemListComponent,
  ],
})
export class ServerPageComponent {
  public title!: string;
  private _document!: ItemEntity;

  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(ItemsActions.loadItems());
  }

  public saveItems() {
    this.store.dispatch(
      ItemsActions.createItem({
        item: {
          title: this.title,
          json: toHTML(this._document),
          date: Date.now().toString(),
          id: v4().toString(),
        },
      })
    );

    this.router.navigateByUrl("blogs");
  }

  public onChange(change: ItemEntity) {
    this._document = change;
  }
}
