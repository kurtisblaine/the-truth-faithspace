import { NgModule } from "@angular/core";

import { AppServerRoutingModule } from "./app-server.routing.module";
import { AppModule } from "./app.module";

@NgModule({
  imports: [AppModule, AppServerRoutingModule],
})
export class AppServerModule {}
