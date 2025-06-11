import { NgModule } from "@angular/core";
import { NoPreloading, RouterModule, Routes, provideRouter } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "truth" },
  {
    path: "home",
    loadChildren: () => import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "truth",
    loadChildren: () => import("./gospel-page/gospel-page.module").then((m) => m.GospelPageModule),
  },
  {
    path: "poems",
    loadChildren: () => import("./psalm-page/psalm-page.module").then((m) => m.PsalmPageModule),
  },
  {
    path: "edifications",
    loadChildren: () => import("./blog-page/blog-page.module").then((m) => m.BlogPageModule),
  },
  {
    path: "insights",
    loadChildren: () => import("./insight-page/insight-page.module").then((m) => m.InsightPageModule),
  },
  {
    path: "email",
    loadChildren: () => import("./email-page/email-page.module").then((m) => m.EmailPageModule),
  },
  {
    path: "discernments",
    loadChildren: () => import("./discern-page/discern-page.module").then((m) => m.DiscernPageModule),
  },
  {
    path: "tracts",
    loadChildren: () => import("./tract-page/tract-page.module").then((m) => m.TractPageModule),
  },
  {
    path: "drawings",
    title: "Drawings",
    loadChildren: () => import("./draw-page/draw-page.module").then((m) => m.DrawPageModule),
  },
  {
    path: "studies",
    loadChildren: () => import("./study-page/study-page.module").then((m) => m.StudyPageModule),
  },
  {
    path: "server",
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
      preloadingStrategy: NoPreloading,
      scrollPositionRestoration: "enabled",
      bindToComponentInputs: true,
    }),
  ],
  exports: [RouterModule],
  providers: [provideRouter(routes)],
})
export class AppRoutingModule {}
