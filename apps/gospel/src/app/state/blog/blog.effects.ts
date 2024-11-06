import { Injectable } from "@angular/core";
import {
  collection,
  collectionData,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  setDoc,
} from "@angular/fire/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, map, mapTo, mergeMap } from "rxjs";

import * as BlogActions from "./blog.actions";
import { BlogEntity } from "./blog.models";

@Injectable()
export class BlogEffects {
  public getBlog$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BlogActions.loadBlogs),
      mapTo(collection(this.database, "blog")),
      mergeMap((data) => collectionData(data, { idField: "collectionId" })),
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
        collection: doc(
          this.database,
          `blog/${blog.collectionId ? blog.collectionId : blog.id}`
        ) as DocumentReference<BlogEntity>,
        blog,
      })),
      mergeMap(({ collection, blog }) => {
        const doc = from(setDoc<BlogEntity, DocumentData>(collection, blog));
        return doc.pipe(mapTo(blog));
      }),
      // mergeMap((created) => from(getDoc(created))),
      map((document) =>
        BlogActions.createBlogSuccess({
          blog: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore) {}
}
