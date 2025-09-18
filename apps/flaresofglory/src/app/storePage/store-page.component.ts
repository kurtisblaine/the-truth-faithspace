import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatInputModule } from "@angular/material/input";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { CartProduct } from "../+state/products/products.models";
import { selectAllCartProducts } from "../+state/products/products.selectors";

@Component({
  selector: "app-store-page",
  imports: [
    CommonModule,
    MatGridListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatButtonModule,
    NgOptimizedImage,
    MatRippleModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: "./store-page.component.html",
  styleUrl: "./store-page.component.scss",
})
export class StorePageComponent {
  public products$: Observable<CartProduct[]>;

  constructor(private store: Store, private router: Router) {
    this.products$ = this.store.select(selectAllCartProducts);
  }

  selectProduct(id: number | string) {
    this.router.navigateByUrl("/store/product/" + id);
  }
}
