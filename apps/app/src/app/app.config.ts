import { provideHttpClient } from "@angular/common/http";
import { ApplicationConfig, provideZonelessChangeDetection } from "@angular/core";
import { provideAnimations } from "@angular/platform-browser/animations";
import {
  provideRouter,
  withComponentInputBinding,
  withEnabledBlockingInitialNavigation,
  withRouterConfig,
} from "@angular/router";
import { appRoutes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      appRoutes,
      withRouterConfig({
        onSameUrlNavigation: "reload",
        paramsInheritanceStrategy: "always",
      }),
      withComponentInputBinding(),
      withEnabledBlockingInitialNavigation()
    ),
    provideHttpClient(),
    provideAnimations(),
    provideZonelessChangeDetection(),
  ],
};
