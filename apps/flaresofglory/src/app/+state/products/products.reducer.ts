import { EntityAdapter, EntityState, createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";

import * as ProductsActions from "./products.actions";
import { CartProduct, ProductsEntity } from "./products.models";

export const PRODUCTS_FEATURE_KEY = "products";

export interface ProductsState extends EntityState<ProductsEntity> {
  selectedId?: string | number;
  loaded: boolean;
  cartProducts: CartProduct[];
  error?: string | null;
}

export interface ProductsPartialState {
  readonly [PRODUCTS_FEATURE_KEY]: ProductsState;
}

export const productsAdapter: EntityAdapter<ProductsEntity> = createEntityAdapter<ProductsEntity>();

export const initialProductsState: ProductsState = productsAdapter.getInitialState({
  // set initial required properties
  loaded: false,
  cartProducts: [],
});

const reducer = createReducer(
  initialProductsState,
  on(ProductsActions.initProducts, (state) => ({ ...state, loaded: false, error: null })),
  on(ProductsActions.loadProductsSuccess, (state, { products, cartProducts }) =>
    productsAdapter.setAll(products, { ...state, loaded: true, cartProducts })
  ),
  on(ProductsActions.addProductSuccess, (state, { cartProducts }) => ({ ...state, cartProducts })),
  on(ProductsActions.updateProductSuccess, (state, { cartProducts }) => ({ ...state, cartProducts })),
  on(ProductsActions.deleteProductSuccess, (state, { cartProducts }) => ({ ...state, cartProducts })),
  on(ProductsActions.loadProductsFailure, (state, { error }) => ({ ...state, error }))
);

export function productsReducer(state: ProductsState | undefined, action: Action) {
  return reducer(state, action);
}
