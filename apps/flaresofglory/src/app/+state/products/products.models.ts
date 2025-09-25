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

export const products = [] as ProductsEntity[];
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
