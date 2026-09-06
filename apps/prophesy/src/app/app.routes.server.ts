import { RenderMode, ServerRoute } from "@angular/ssr";
import { itemsRows } from "./+state/items.database";

export const serverRoutes: ServerRoute[] = [
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "prophesies/prophesy-item/:title",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return itemsRows.map((item) => ({ title: item.title.toString() }));
    },
  },
];
