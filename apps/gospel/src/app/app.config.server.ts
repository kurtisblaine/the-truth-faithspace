import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideServerRendering, RenderMode, ServerRoute, withRoutes } from "@angular/ssr";
import { appConfig } from "./app.config";

const serverRoutes: ServerRoute[] = [
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
  {
    path: "edifications/edify-detail/:id",
    renderMode: RenderMode.Client,
  },
  {
    path: "discernments/discernment-detail/:id",
    renderMode: RenderMode.Client,
  },
  {
    path: "drawings/draw/:id",
    renderMode: RenderMode.Client,
  },
  {
    path: "studies/study-detail/:id",
    renderMode: RenderMode.Client,
  },
  {
    path: "insights/insight-detail/:id",
    renderMode: RenderMode.Client,
  },
  {
    path: "poems/poem-detail/:id",
    renderMode: RenderMode.Client,
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
