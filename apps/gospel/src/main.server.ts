import { enableProdMode } from "@angular/core";

import { platformServer } from "@angular/platform-server";
import { AppServerModule } from "./app/app-server.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformServer()
  .bootstrapModule(AppServerModule)
  .catch((err) => console.error(err));
