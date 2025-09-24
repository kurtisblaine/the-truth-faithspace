import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatDialog } from "@angular/material/dialog";
import { MatListModule } from "@angular/material/list";
import { Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { deleteProduct } from "../+state/products/products.actions";
import { CartProduct } from "../+state/products/products.models";
import { selectCartProducts, selectCartTotal } from "../+state/products/products.selectors";
import { ProductUpdateComponent } from "./product-update.component";

@Component({
  selector: "app-cart-page",
  imports: [CommonModule, MatListModule, NgOptimizedImage, FontAwesomeModule, MatButtonModule, MatCardModule],
  templateUrl: "./cart-page.component.html",
  styleUrl: "./cart-page.component.scss",
})
export class CartPageComponent {
  public cartProducts$: Observable<CartProduct[]>;
  public total$: Observable<number>;
  public trashIcon = faTrash;
  public updateIcon = faEdit;

  constructor(private store: Store, private router: Router, private dialog: MatDialog) {
    this.cartProducts$ = this.store.select(selectCartProducts);
    this.total$ = this.store.select(selectCartTotal);
  }

  public deleteCart(product: CartProduct) {
    this.store.dispatch(deleteProduct({ product }));
  }

  public goCheckout() {
    this.router.navigateByUrl("/checkout");
  }

  public selectProduct(id: number | string) {
    this.router.navigateByUrl("/store/product/" + id);
  }

  public openEditDialog(product: CartProduct) {
    this.dialog.open(ProductUpdateComponent, {
      data: { product },
    });
  }
}
