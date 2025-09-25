export interface ProductsEntity {
  id: string | number;
  name: string;
  description?: string;
  image: string;
  price: number;
  colors?: ColorProduct[];
}

export interface ColorProduct {
  value: string;
  image: string;
}

export interface CartProduct extends ProductsEntity {
  cartProductId: string;
  count: number;
  color?: string;
  size?: string;
}
