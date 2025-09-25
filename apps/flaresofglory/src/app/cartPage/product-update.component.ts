import { ChangeDetectionStrategy, Component, Inject, signal, WritableSignal } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { Store } from "@ngrx/store";
import { updateProduct } from "../+state/products/products.actions";
import { CartProduct } from "../+state/products/products.models";

@Component({
  selector: "app-product-update",
  imports: [FormsModule, MatSelectModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatDialogModule],
  template: `
    <h1 mat-dialog-title>Update Product: {{ product().name }}</h1>
    <mat-dialog-content>
      <mat-form-field appearance="outline" subscriptSizing="dynamic" class="cart-form-field" matListItemMeta>
        <mat-label>Quantity</mat-label>
        <input
          matInput
          aria-label="Quantity Input"
          aria-labelledby="Quantity Input"
          type="number"
          step="1"
          min="1"
          [(ngModel)]="product().count"
        />
      </mat-form-field>
      <mat-form-field
        name="size"
        aria-label="Size"
        appearance="outline"
        [subscriptSizing]="'dynamic'"
        class="cart-form-field"
        matListItemMeta
      >
        <mat-label>Size</mat-label>
        <mat-select [(ngModel)]="product().size">
          <mat-option value="Small">Small</mat-option>
          <mat-option value="Medium">Medium</mat-option>
          <mat-option value="Large">Large</mat-option>
          <mat-option value="XL">XL</mat-option>
          <mat-option value="2XL">2XL</mat-option>
        </mat-select>
      </mat-form-field>

      @if(product().colors) {
      <mat-form-field
        name="color"
        aria-label="Color"
        appearance="outline"
        [subscriptSizing]="'dynamic'"
        class="cart-form-field"
        matListItemMeta
      >
        <mat-label>Color</mat-label>
        <mat-select [(ngModel)]="product().color">
          @for(color of product().colors; track color.value) {
          <mat-option [value]="color.value">{{ color.value }}</mat-option>
          }
        </mat-select>
      </mat-form-field>
      }
    </mat-dialog-content>
    <mat-dialog-actions>
      <button matButton="elevated" [mat-dialog-close]="true" (click)="updateCart(product())" matListItemMeta>
        Update
      </button>
    </mat-dialog-actions>
  `,
  styles: `mat-dialog-content {
    display: flex; flex-direction: column;
  }
  mat-dialog-content > * {
    margin: 10px 0px;
  }
  `,

  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductUpdateComponent {
  public product: WritableSignal<CartProduct>;

  constructor(private store: Store, @Inject(MAT_DIALOG_DATA) public data: { product: CartProduct }) {
    this.product = signal<CartProduct>({ ...this.data.product } as CartProduct);
  }

  public updateCart(product: CartProduct) {
    if (product.colors) {
      product.image = product.colors.find((c) => c.value === product.color).image;
    }

    this.store.dispatch(updateProduct({ product }));
  }
}
