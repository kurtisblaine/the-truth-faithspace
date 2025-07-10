import { ApplicationConfig, mergeApplicationConfig } from "@angular/core";
import { provideServerRendering, withAppShell, withRoutes } from "@angular/ssr";
import { AppComponent } from "./app.component";
import { appConfig } from "./app.config";
import { serverRoutes } from "./app.routes.server";

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes), withAppShell(AppComponent))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
