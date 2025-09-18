import { isPlatformBrowser } from "@angular/common";
import { Injectable, PLATFORM_ID, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as ProductsActions from "./products.actions";
import { CartProduct, ProductsEntity } from "./products.models";

@Injectable()
export class ProductsEffects {
  private actions$ = inject(Actions);
  private platformId = inject(PLATFORM_ID);

  public readonly cart = "flaresOfGloryCart";

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductsActions.initProducts),
      switchMap(() => {
        const products = [] as ProductsEntity[];
        products.push({
          id: 1,
          name: "Flares of Glory | Black",
          description: "Available in all colors.",
          image: "../../../assets/blackflares.webp",
          price: 50.0,
        });
        products.push({
          id: 2,
          name: "Flares of Glory | White",
          description: "Available in all colors.",
          image: "../../../assets/whiteflares.webp",
          price: 50.0,
        });
        products.push({
          id: 3,
          name: "The Holy Spirit descended like a dove",
          description: "Matthew 3:13",
          image: "../../../assets/dovefire.webp",
          price: 50.0,
        });
        products.push({
          id: 4,
          name: "Nothing but the Blood",
          description: "Available in all colors.",
          image: "../../../assets/nothingbut.webp",
          price: 50.0,
        });
        products.push({
          id: 5,
          name: "Dove",
          description: "Matthew 3:13",
          image: "../../../assets/dove.webp",
          price: 50.0,
        });

        const cart = isPlatformBrowser(this.platformId) ? localStorage.getItem(this.cart) : null;
        const cartProducts = cart ? JSON.parse(cart) : ([] as CartProduct[]);

        return of(ProductsActions.loadProductsSuccess({ products, cartProducts }));
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
        const cartProducts = cart ? JSON.parse(cart) : ([] as CartProduct[]);
        cartProducts.push(product);
        localStorage.setItem(this.cart, JSON.stringify(cartProducts));
        return cartProducts;
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
        cartProducts = cartProducts.filter((item) => item.id.toString() !== product.id.toString());
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
        const updatedProducts = cartProducts.map((item) =>
          item.id.toString() === product.id.toString() ? { ...item, ...product } : item
        );

        localStorage.setItem(this.cart, JSON.stringify(updatedProducts));
        return updatedProducts;
      }),
      switchMap((cartProducts) => of(ProductsActions.updateProductSuccess({ cartProducts }))),
      catchError((error) => {
        console.error("Error", error);
        return of(ProductsActions.updateProductFailure({ error }));
      })
    )
  );
}
