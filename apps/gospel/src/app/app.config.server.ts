import { ApplicationConfig, inject, mergeApplicationConfig } from "@angular/core";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { PrerenderFallback, provideServerRendering, RenderMode, ServerRoute, withRoutes } from "@angular/ssr";
import { firstValueFrom } from "rxjs";
import { appConfig } from "./app.config";
import { DataService } from "./draw-page/data.service";
import { GospelItemService } from "./gospel-page/gospel-item/gospel-item.service";

const serverRoutes: ServerRoute[] = [
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "edifications/edify-detail/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const firebase = inject(Firestore);

      const collectionRef = collection(firebase, "blog");
      const collectionData$ = collectionData(collectionRef, { idField: "collectionId" });

      return await firstValueFrom(collectionData$);
    },
  },
  {
    path: "discernments/discernment-detail/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const firebase = inject(Firestore);

      const collectionRef = collection(firebase, "discern");
      const collectionData$ = collectionData(collectionRef, { idField: "collectionId" });

      return await firstValueFrom(collectionData$);
    },
    fallback: PrerenderFallback.Server,
  },
  {
    path: "studies/study-detail/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const firebase = inject(Firestore);

      const collectionRef = collection(firebase, "study");
      const collectionData$ = collectionData(collectionRef, { idField: "collectionId" });

      return await firstValueFrom(collectionData$);
    },
  },
  {
    path: "insights/insight-detail/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const firebase = inject(Firestore);

      const collectionRef = collection(firebase, "proverb");
      const collectionData$ = collectionData(collectionRef, { idField: "collectionId" });

      return await firstValueFrom(collectionData$);
    },
  },
  {
    path: "poems/poem-detail/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const firebase = inject(Firestore);

      const collectionRef = collection(firebase, "psalm");
      const collectionData$ = collectionData(collectionRef, { idField: "collectionId" });

      return await firstValueFrom(collectionData$);
    },
  },
  {
    path: "drawings/draw/:id",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataService = inject(DataService);
      const images = dataService.init();

      return images.map((image) => ({ id: image.fileName.split(".")[0] }));
    },
  },
  {
    path: "truth/truthful-item/:page",
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      const dataService = inject(GospelItemService);
      const components = dataService.init();

      return Array.from(components.keys()).map((page) => ({ page }));
    },
  },
  {
    path: "server/f3bc7c75-cdf7-4c51-beab-3ef81d6a5e5c",
    renderMode: RenderMode.Client,
  },
];

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
