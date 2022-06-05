import { Injectable } from "@angular/core";
import {
  addDoc,
  collection,
  collectionData,
  CollectionReference,
  Firestore,
  getDoc,
} from "@angular/fire/firestore";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { from, map, mapTo, mergeMap } from "rxjs";

import * as BlogActions from "./blog.actions";
import { BlogEntity } from "./blog.models";
import * as BlogFeature from "./blog.reducer";

@Injectable()
export class BlogEffects {
  public getBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.loadBlogs),
      mapTo(collection(this.database, "blog")),
      mergeMap((data) => collectionData(data)),
      map((data) =>
        BlogActions.loadBlogsSuccess({
          blog: data as BlogEntity[],
        })
      )
    )
  );

  public createBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.createBlog),
      map(({ blog }) => ({
        collection: collection(
          this.database,
          "blog"
        ) as CollectionReference<BlogEntity>,
        blog,
      })),
      mergeMap(({ collection, blog }) =>
        from(addDoc<BlogEntity>(collection, blog))
      ),
      mergeMap((created) => from(getDoc(created))),
      map((document) =>
        BlogActions.createBlogSuccess({
          blog: document.data() as BlogEntity,
        })
      )
    )
  );

  constructor(
    private readonly actions$: Actions,
    private database: Firestore
  ) {}
}
