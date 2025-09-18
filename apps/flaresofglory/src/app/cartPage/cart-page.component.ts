import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { deleteProduct, updateProduct } from "../+state/products/products.actions";
import { CartProduct } from "../+state/products/products.models";
import { selectCartProducts } from "../+state/products/products.selectors";

@Component({
  selector: "app-cart-page",
  imports: [
    CommonModule,
    MatListModule,
    NgOptimizedImage,
    FormsModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    FontAwesomeModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: "./cart-page.component.html",
  styleUrl: "./cart-page.component.scss",
})
export class CartPageComponent {
  public cartProducts$: Observable<CartProduct[]>;
  public trashIcon = faTrash;

  constructor(private store: Store, private router: Router) {
    this.cartProducts$ = this.store.select(selectCartProducts);
  }

  public updateCart(product: CartProduct) {
    this.store.dispatch(updateProduct({ product }));
  }

  public deleteCart(product: CartProduct) {
    this.store.dispatch(deleteProduct({ product }));
  }

  selectProduct(id: number | string) {
    this.router.navigateByUrl("/store/product/" + id);
  }
}
