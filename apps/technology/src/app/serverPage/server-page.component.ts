import { Component, ChangeDetectionStrategy } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Guid } from "guid-typescript";
import { ItemsActions } from "../+state/items/items.actions";
import { ItemEntity } from "../+state/items/items.reducer";
@Component({
  selector: "app-server-page",
    changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<button mat-flat-button (click)="saveItems()">Post Item</button>

    <div>Title</div>
    <input matInput type="text" [(ngModel)]="title" required />

    <app-text-editor (editorChanged)="onChange($event)"></app-text-editor>

    <mat-accordion class="example-headers-align" multi>
      <mat-expansion-panel>
        <mat-expansion-panel-header>
          <mat-panel-title>
            <h1 style="padding: 15px 15px 0px" class="primary-color">Items</h1>
          </mat-panel-title>
        </mat-expansion-panel-header>
        <ng-template matExpansionPanelContent>
          <app-item-list [update]="true"></app-item-list>
        </ng-template> </mat-expansion-panel
    ></mat-accordion>`,
  styles: ``,
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
          json: this._document,
          date: Date.now().toString(),
          id: Guid.create().toString(),
        },
      })
    );

    this.router.navigateByUrl("items");
  }

  public onChange(change: ItemEntity) {
    this._document = change;
  }
}
