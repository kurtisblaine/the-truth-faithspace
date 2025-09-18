import { createAction, props } from "@ngrx/store";
import { CartProduct, ProductsEntity } from "./products.models";

export const initProducts = createAction("[Products Page] Init");

export const loadProductsSuccess = createAction(
  "[Products/API] Load Products Success",
  props<{ products: ProductsEntity[]; cartProducts: CartProduct[] }>()
);

export const loadProductsFailure = createAction("[Products/API] Load Products Failure", props<{ error: any }>());

export const addProduct = createAction("[Products Page] Add Product", props<{ product: CartProduct }>());
export const addProductSuccess = createAction(
  "[Products Page] Add Product Success",
  props<{ cartProducts: CartProduct[] }>()
);
export const addProductFailure = createAction("[Products Page] Add Product Failure", props<{ error: any }>());

export const deleteProduct = createAction("[Products Page] Delete Product", props<{ product: CartProduct }>());
export const deleteProductSuccess = createAction(
  "[Products Page] Delete Product Success",
  props<{ cartProducts: CartProduct[] }>()
);
export const deleteProductFailure = createAction("[Products Page] Delete Product Failure", props<{ error: any }>());

export const updateProduct = createAction("[Products Page] Update Product", props<{ product: CartProduct }>());
export const updateProductSuccess = createAction(
  "[Products Page] Update Product Success",
  props<{ cartProducts: CartProduct[] }>()
);
export const updateProductFailure = createAction("[Products Page] Update Product Failure", props<{ error: any }>());
