import { ScullyConfig } from "@scullyio/scully";

import { getFlashPreventionPlugin } from "@scullyio/scully-plugin-flash-prevention";

import "@scullyio/scully-plugin-playwright";

export const config: ScullyConfig = {
  projectRoot: "./apps/gospel/public",
  projectName: "static-gospel",
  target: "targets",
  outDir: "./apps/gospel/static",
  routes: {},
  defaultPostRenderers: [getFlashPreventionPlugin({ appRootSelector: "blog-root" })],
  // routes: {
  //   "/edifications/edify-detail/:id": {
  //     type: "json",
  //     property: "id",
  //     url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/blog/${id}",
  //   },
  //   "/discernments/discernment-detail/:id": {
  //     type: "json",
  //     property: "id",
  //     url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/discern/${id}",
  //   },
  //   "/studies/study-detail/:id": {
  //     type: "json",
  //     property: "id",
  //     url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/study/${id}",
  //   },
  //   "/poems/poem-detail/:id": {
  //     type: "json",
  //     property: "id",
  //     url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/psalm/${id}",
  //   },
  //   "/insights/insight-detail/:id": {
  //     type: "json",
  //     property: "id",
  //     url: "https://firestore.googleapis.com/v1/projects/blog-46974/databases/(default)/documents/proverb/${id}",
  //   },
  // },
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
    // slowMo: 5000,
    // devtools: true
    // npm run scully:build -- --showBrowser
  },
};
