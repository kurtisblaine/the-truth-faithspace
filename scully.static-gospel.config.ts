import { ScullyConfig } from "@scullyio/scully";

import "@scullyio/scully-plugin-playwright";

export const config: ScullyConfig = {
  projectRoot: "./apps/gospel/public",
  projectName: "static-gospel",
  target: "targets",
  outDir: "./apps/gospel/static",
  routes: {
    "/server": {
      type: "ignored",
    },
    "/edifications": {
      type: "json",
      url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/blog",
    },
    "/discernments": {
      type: "json",
      url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/discern",
    },
    "/studies": {
      type: "json",
      url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/study",
    },
    "/poems": {
      type: "json",
      url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/psalm",
    },
    "/insights": {
      type: "json",
      url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/proverb",
    },
  },
  // extraRoutes: ["/insights", "/poems", "/studies", "/discernments", "/edifications"],
  puppeteerLaunchOptions: {
    args: [
      "--disable-gpu",
      "--renderer",
      "--no-sandbox",
      "--no-service-autorun",
      "--no-experiments",
      "--no-default-browser-check",
      "--disable-dev-shm-usage",
      "--disable-setuid-sandbox",
      "--no-first-run",
      "--no-zygote",
      "--single-process",
      "--disable-extensions",
    ],
  },
};
