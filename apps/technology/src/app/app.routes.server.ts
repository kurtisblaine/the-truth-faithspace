import { inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { RenderMode, ServerRoute } from "@angular/ssr";
import { firstValueFrom, map } from "rxjs";
import { toKebabCase } from "./+state/items/items.effects";

export const serverRoutes: ServerRoute[] = [
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "items/item-detail/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const firebase = inject(Firestore);

      const collectionRef = collection(firebase, "item");
      const collectionData$ = collectionData(collectionRef, { idField: "collectionId" }).pipe(
        map((data) => data.map((d) => ({ id: toKebabCase(d.title) })))
      );

      return await firstValueFrom(collectionData$);
    },
  },
  {
    path: "server/777c7c75-cdf7-4c51-beab-3ef81d6a5777",
    renderMode: RenderMode.Client,
  },
];
