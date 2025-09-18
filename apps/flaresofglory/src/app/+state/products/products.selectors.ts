import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CartProduct } from "./products.models";
import { PRODUCTS_FEATURE_KEY, ProductsState, productsAdapter } from "./products.reducer";

// Lookup the 'Products' feature state managed by NgRx
export const selectProductsState = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE_KEY);

const { selectAll, selectEntities } = productsAdapter.getSelectors();

export const selectProductsLoaded = createSelector(selectProductsState, (state: ProductsState) => state.loaded);

export const selectProductsError = createSelector(selectProductsState, (state: ProductsState) => state.error);

export const selectAllProducts = createSelector(selectProductsState, (state: ProductsState) => selectAll(state));
export const selectAllCartProducts = createSelector(selectProductsState, (state: ProductsState) =>
  selectAll(state).map((p) => ({ ...p, count: 1 } as CartProduct))
);

export const selectProductsEntities = createSelector(selectProductsState, (state: ProductsState) =>
  selectEntities(state)
);

export const selectSelectedId = createSelector(selectProductsState, (state: ProductsState) => state.selectedId);

export const selectCartCount = createSelector(selectProductsState, (state: ProductsState) =>
  state.cartProducts.length ? state.cartProducts.length : undefined
);
export const selectCartProducts = createSelector(selectProductsState, (state: ProductsState) => state.cartProducts);

export const selectEntity = createSelector(selectProductsEntities, selectSelectedId, (entities, selectedId) =>
  selectedId ? entities[selectedId] : undefined
);

export const selectCartProduct = (id: string | number) =>
  createSelector(selectProductsState, (state) => ({ ...state.entities[id], count: 1 } as CartProduct));
