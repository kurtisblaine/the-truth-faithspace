import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes, provideRouter, withHashLocation } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "truth" },
  {
    path: "",
    loadChildren: () => import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    loadChildren: () => import("./gospel-page/gospel-page.module").then((m) => m.GospelPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./psalm-page/psalm-page.module").then((m) => m.PsalmPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./blog-page/blog-page.module").then((m) => m.BlogPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./insight-page/insight-page.module").then((m) => m.InsightPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./email-page/email-page.module").then((m) => m.EmailPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./discern-page/discern-page.module").then((m) => m.DiscernPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./tract-page/tract-page.module").then((m) => m.TractPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./draw-page/draw-page.module").then((m) => m.DrawPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./link-page/link-page.module").then((m) => m.LinkPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./study-page/study-page.module").then((m) => m.StudyPageModule),
  },
  {
    path: "",
    loadChildren: () => import("./server-page/server-page.module").then((m) => m.ServerPageModule),
  },
  { path: "**", redirectTo: "error" },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload",
      anchorScrolling: "enabled",
      preloadingStrategy: PreloadAllModules,
      scrollPositionRestoration: "enabled",
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
  providers: [provideRouter(routes, withHashLocation())],
})
export class AppRoutingModule {}
