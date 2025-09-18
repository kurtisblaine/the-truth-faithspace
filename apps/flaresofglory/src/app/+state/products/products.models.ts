export interface ProductsEntity {
  id: string | number;
  name: string;
  description?: string;
  image: string;
  price: number;
}

export interface CartProduct extends ProductsEntity {
  count: number;
  color?: string;
  size?: string;
}
