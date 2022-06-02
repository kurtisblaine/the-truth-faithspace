import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { PsalmPageComponent } from "./psalm-page/psalm-page.component";
import { ServerPageComponent } from "./server-page/server-page/server-page.component";
import { TextEditorComponent } from "./shared/components/text-editor/text-editor.component";

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
    children: [],
  },
  {
    path: "psalms",
    component: PsalmPageComponent,
    children: [],
  },
  {
    path: "server/f3bc7c75-cdf7-4c51-beab-3ef81d6a5e5c",
    component: ServerPageComponent,
  },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", redirectTo: "error" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
