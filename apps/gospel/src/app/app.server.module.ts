import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { provideClientHydration, withEventReplay } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { AppModule } from "./app.module";

@NgModule({
  imports: [AppModule, ServerModule],
  bootstrap: [AppComponent],
  providers: [provideClientHydration(withEventReplay())],
})
export class AppServerModule {}
