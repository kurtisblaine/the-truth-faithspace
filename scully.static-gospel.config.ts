import { ScullyConfig } from "@scullyio/scully";

export const config: ScullyConfig = {
  projectRoot: "./apps/gospel/public",
  projectName: "static-gospel",
  target: "targets",
  outDir: "./apps/gospel/static",
  routes: {
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
};
