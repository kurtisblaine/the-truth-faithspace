import { NgModule } from "@angular/core";
import { provideServerRendering, RenderMode, ServerRoute, withRoutes } from "@angular/ssr";

const serverRoutes: ServerRoute[] = [
  {
    path: "**",
    renderMode: RenderMode.Prerender,
  },
];
@NgModule({
  providers: [provideServerRendering(withRoutes(serverRoutes))],
})
export class AppServerRoutingModule {}
