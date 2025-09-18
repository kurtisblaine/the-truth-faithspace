import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, Input } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addProduct, initProducts } from "../../+state/products/products.actions";
import { CartProduct } from "../../+state/products/products.models";
import { selectCartProduct } from "../../+state/products/products.selectors";

@Component({
  selector: "app-product-detail-page",
  imports: [
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: "./product-detail-page.component.html",
  styleUrl: "./product-detail-page.component.scss",
})
export class ProductDetailPageComponent {
  @Input() public id: number;

  public selectedProduct$: Observable<CartProduct>;

  constructor(private store: Store) {
    this.store.dispatch(initProducts());
    this.selectedProduct$ = this.store.select(selectCartProduct(this.id));
  }

  public addToCart(product: CartProduct) {
    this.store.dispatch(addProduct({ product }));
  }
}
