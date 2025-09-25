import { RenderMode, ServerRoute } from "@angular/ssr";
import { products } from "./+state/products/products.database";

export const serverRoutes: ServerRoute[] = [
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "store/product/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return products.map((product) => ({ id: product.id.toString() }));
    },
  },
];
