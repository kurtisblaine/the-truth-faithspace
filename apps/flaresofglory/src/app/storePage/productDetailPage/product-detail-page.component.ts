import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatDialog } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { addProduct, initProducts } from "../../+state/products/products.actions";
import { CartProduct } from "../../+state/products/products.models";
import { selectCartProduct } from "../../+state/products/products.selectors";
import { SizingDialogComponent } from "./sizing-dialog.component";
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
    MatExpansionModule,
    FontAwesomeModule,
  ],
  templateUrl: "./product-detail-page.component.html",
  styleUrl: "./product-detail-page.component.scss",
})
export class ProductDetailPageComponent {
  public selectedProduct$: Observable<CartProduct>;
  public sizeIcon = faRulerCombined;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {
    this.store.dispatch(initProducts());
    const id = this.route.snapshot.paramMap.get("id");
    this.selectedProduct$ = this.store.select(selectCartProduct(id));
  }

  public addToCart(product: CartProduct) {
    this.store.dispatch(addProduct({ product }));
    this.router.navigateByUrl("cart");
  }

  public openSizeGuide() {
    this.dialog.open(SizingDialogComponent);
  }
}
