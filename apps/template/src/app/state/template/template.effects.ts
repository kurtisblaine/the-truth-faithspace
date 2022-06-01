import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetch } from "@nrwl/angular";

import * as templateActions from "./template.actions";
import * as templateFeature from "./template.reducer";

@Injectable()
export class TemplateEffects {
  public init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(templateActions.init)
      // fetch({
      //   run: (action) => {
      //     // Your custom service 'load' logic goes here. For now just return a success action...
      //     return templateActions.loadtemplateSuccess({ template: [] });
      //   },
      //   onError: (action, error) => {
      //     console.error("Error", error);
      //     return templateActions.loadtemplateFailure({ error });
      //   },
      // })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
