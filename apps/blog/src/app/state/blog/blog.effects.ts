import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetch } from "@nrwl/angular";

import * as BlogActions from "./blog.actions";
import * as BlogFeature from "./blog.reducer";

@Injectable()
export class BlogEffects {
  public init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.init)
      // fetch({
      //   run: (action) => {
      //     // Your custom service 'load' logic goes here. For now just return a success action...
      //     return BlogActions.loadBlogSuccess({ blog: [] });
      //   },
      //   onError: (action, error) => {
      //     console.error("Error", error);
      //     return BlogActions.loadBlogFailure({ error });
      //   },
      // })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
