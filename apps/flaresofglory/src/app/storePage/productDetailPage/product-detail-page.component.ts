import { CommonModule, NgOptimizedImage } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialog } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { ActivatedRoute, Router } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { Store } from "@ngrx/store";
import { Observable, tap } from "rxjs";
import { v4 } from "uuid";
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
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    FontAwesomeModule,
    MatSelectModule,
    MatRadioModule,
  ],
  templateUrl: "./product-detail-page.component.html",
  styleUrl: "./product-detail-page.component.scss",
  encapsulation: ViewEncapsulation.None,
})
export class ProductDetailPageComponent {
  public selectedProduct$: Observable<CartProduct>;
  public sizeIcon = faRulerCombined;

  constructor(private store: Store, private route: ActivatedRoute, private router: Router, private dialog: MatDialog) {
    this.store.dispatch(initProducts());
    const id = this.route.snapshot.paramMap.get("id");
    this.selectedProduct$ = this.store.select(selectCartProduct(id)).pipe(
      tap((product) => {
        //set the first one as the default...
        if (product?.colors) product.color = product.colors[0].value;
      })
    );
  }

  public addToCart(product: CartProduct) {
    product.cartProductId = v4().toString();
    this.store.dispatch(addProduct({ product }));
    this.router.navigateByUrl("cart");
  }

  changeImageColor(product: CartProduct, changedColor: string) {
    product.image = product.colors.find((c) => c.value === changedColor).image;
  }

  public openSizeGuide() {
    this.dialog.open(SizingDialogComponent);
  }
}
