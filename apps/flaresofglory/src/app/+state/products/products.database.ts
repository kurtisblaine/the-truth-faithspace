import { ProductsEntity } from "./products.models";

export const products = [] as ProductsEntity[];
products.push({
  id: 1,
  name: "Flares of Glory",
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
