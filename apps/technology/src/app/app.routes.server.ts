import { inject } from "@angular/core";
import { Firestore, collection, collectionData } from "@angular/fire/firestore";
import { RenderMode, ServerRoute } from "@angular/ssr";
import { firstValueFrom } from "rxjs";

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
      const collectionData$ = collectionData(collectionRef, { idField: "collectionId" });

      return await firstValueFrom(collectionData$);
    },
  },
  {
    path: "server/**",
    renderMode: RenderMode.Client,
  },
];
