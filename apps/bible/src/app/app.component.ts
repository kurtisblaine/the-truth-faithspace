import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: "app-root",
  template: `<h1>Welcome Bible</h1>
    <router-outlet></router-outlet>`,
  styles: ``,
})
export class AppComponent {}
