import { isPlatformBrowser } from "@angular/common";
import { inject, Injectable, PLATFORM_ID } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as ProductsActions from "./products.actions";
import { products } from "./products.database";
import { CartProduct } from "./products.models";

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private platformId = inject(PLATFORM_ID);

  public readonly cart = "flaresOfGloryCart";

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      switchMap(() => {
        const cart = isPlatformBrowser(this.platformId) ? localStorage.getItem(this.cart) : null;
        const cartProducts = cart ? JSON.parse(cart) : ([] as CartProduct[]);

        return of(ProductsActions.loadProductsSuccess({ products: products, cartProducts }));
      }),
      catchError((error) => {
        console.error("Error", error);
        return of(ProductsActions.loadProductsFailure({ error }));
      })
    )
  );

  addProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.addProduct),
      map(({ product }) => {
        const cart = localStorage.getItem(this.cart);
        const cartProducts = cart ? (JSON.parse(cart) as CartProduct[]) : ([] as CartProduct[]);
        cartProducts.push(product);

        const flattenedProducts = this.consoladateProducts(cartProducts);
        localStorage.setItem(this.cart, JSON.stringify(flattenedProducts));
        return flattenedProducts;
      }),
      switchMap((cartProducts) => of(ProductsActions.addProductSuccess({ cartProducts }))),
      catchError((error) => {
        console.error("Error", error);
        return of(ProductsActions.addProductFailure({ error }));
      })
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.deleteProduct),
      map(({ product }) => {
        const cart = localStorage.getItem(this.cart);
        let cartProducts = JSON.parse(cart) as CartProduct[];
        cartProducts = cartProducts.filter((item) => item.cartProductId !== product.cartProductId);
        localStorage.setItem(this.cart, JSON.stringify(cartProducts));
        return cartProducts;
      }),
      switchMap((cartProducts) => of(ProductsActions.deleteProductSuccess({ cartProducts }))),
      catchError((error) => {
        console.error("Error", error);
        return of(ProductsActions.deleteProductFailure({ error }));
      })
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.updateProduct),
      map(({ product }) => {
        const cart = localStorage.getItem(this.cart);
        const cartProducts = JSON.parse(cart) as CartProduct[];
        const updatedProducts = cartProducts.map((item) => {
          if (item.cartProductId === product.cartProductId) {
            item = { ...item, ...product };
          }
          return item;
        });

        const flattenedProducts = this.consoladateProducts(updatedProducts);

        localStorage.setItem(this.cart, JSON.stringify(flattenedProducts));
        return flattenedProducts;
      }),
      switchMap((cartProducts) => of(ProductsActions.updateProductSuccess({ cartProducts }))),
      catchError((error) => {
        console.error("Error", error);
        return of(ProductsActions.updateProductFailure({ error }));
      })
    )
  );

  private consoladateProducts = (cartProducts: CartProduct[]) => {
    const groupedItems = cartProducts.reduce((acc, currentItem) => {
      const groupKey = `${currentItem.id.toString()}_${currentItem.color}_${currentItem.size}`;
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(currentItem);
      return acc;
    }, {} as Record<string, CartProduct[]>);

    const flattenedProducts = Object.entries(groupedItems).map(([_, groupedItems]) => {
      const total = groupedItems.reduce((quantity, item) => (quantity += item.count), 0);
      const flatProduct = { ...groupedItems[0] };
      flatProduct.count = total;
      return flatProduct;
    });

    return flattenedProducts;
  };
}
