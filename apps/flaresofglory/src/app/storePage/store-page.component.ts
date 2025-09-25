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
import { MatTabsModule } from "@angular/material/tabs";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { DeviceDetectorService } from "ngx-device-detector";
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
    MatTabsModule,
  ],
  templateUrl: "./store-page.component.html",
  styleUrl: "./store-page.component.scss",
})
export class StorePageComponent {
  public rowHeight: string;
  public products$: Observable<CartProduct[]>;

  constructor(private store: Store, private router: Router, private deviceDetector: DeviceDetectorService) {
    this.products$ = this.store.select(selectAllCartProducts);
    this.rowHeight = this.deviceDetector.isMobile() ? "1:2" : "2:1";
  }

  selectProduct(id: number | string) {
    this.router.navigateByUrl("/store/product/" + id);
  }
}
