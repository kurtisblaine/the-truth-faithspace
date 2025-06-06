import { NgModule } from "@angular/core";
import { NoPreloading, RouterModule, Routes, provideRouter } from "@angular/router";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "truth" },
  {
    path: "home",
    title: "Testimony",
    loadChildren: () => import("./home-page/home-page.module").then((m) => m.HomePageModule),
  },
  {
    path: "truth",
    title: "The Good News of the Kingdom of God",
    loadChildren: () => import("./gospel-page/gospel-page.module").then((m) => m.GospelPageModule),
  },
  {
    path: "poems",
    title: "Poems",
    loadChildren: () => import("./psalm-page/psalm-page.module").then((m) => m.PsalmPageModule),
  },
  {
    path: "edifications",
    title: "Edifications",
    loadChildren: () => import("./blog-page/blog-page.module").then((m) => m.BlogPageModule),
  },
  {
    path: "insights",
    title: "Insights",
    loadChildren: () => import("./insight-page/insight-page.module").then((m) => m.InsightPageModule),
  },
  {
    path: "email",
    title: "Contact Me",
    loadChildren: () => import("./email-page/email-page.module").then((m) => m.EmailPageModule),
  },
  {
    path: "discernments",
    title: "Discernments",
    loadChildren: () => import("./discern-page/discern-page.module").then((m) => m.DiscernPageModule),
  },
  {
    path: "tracts",
    title: "Gospel Tracts",
    loadChildren: () => import("./tract-page/tract-page.module").then((m) => m.TractPageModule),
  },
  {
    path: "drawings",
    title: "Drawings",
    loadChildren: () => import("./draw-page/draw-page.module").then((m) => m.DrawPageModule),
  },
  // {
  //   path: "resources",
  //   loadChildren: () => import("./link-page/link-page.module").then((m) => m.LinkPageModule),
  // },
  {
    path: "studies",
    title: "Studies",
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
