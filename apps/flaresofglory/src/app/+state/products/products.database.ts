import { ProductsEntity, ProductType } from "./products.models";

export const products = [] as ProductsEntity[];
products.push({
  id: 1,
  name: "Flares of Glory",
  type: ProductType.Sweatshirts,
  description: "Available in all colors.",
  image: "../../../assets/flaresofglory_White.webp",
  colors: [
    { value: "White", image: "../../../assets/flaresofglory_White.webp" },
    { value: "Black", image: "../../../assets/flaresofglory_Black.webp" },
  ],
  price: 50.0,
});
products.push({
  id: 3,
  name: "The Holy Spirit descended like a dove",
  type: ProductType.Sweatshirts,
  description: "Matthew 3:13",
  image: "../../../assets/dovefire.webp",
  price: 50.0,
});
products.push({
  id: 4,
  name: "Nothing but the Blood",
  type: ProductType.Sweatshirts,
  description: "Available in all colors.",
  image: "../../../assets/nothingbut.webp",
  price: 50.0,
});
products.push({
  id: 5,
  name: "Dove",
  type: ProductType.Sweatshirts,
  description: "Matthew 3:13",
  image: "../../../assets/dove.webp",
  price: 50.0,
});
