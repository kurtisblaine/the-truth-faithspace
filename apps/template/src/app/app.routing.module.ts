import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {
    path: "/home",
    component: HomePageComponent,
    children: [],
  },
  { path: "", pathMatch: "full", redirectTo: "/home" },
  { path: "**", redirectTo: "/error" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
