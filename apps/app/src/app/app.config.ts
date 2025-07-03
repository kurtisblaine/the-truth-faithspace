import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, provideZonelessChangeDetection } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter, withComponentInputBinding, withRouterConfig } from "@angular/router";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
        paramsInheritanceStrategy: "always",
      }),
      withComponentInputBinding()
    ),
    provideHttpClient(),
    provideAnimations(),
    provideZonelessChangeDetection(),
  ],
};
