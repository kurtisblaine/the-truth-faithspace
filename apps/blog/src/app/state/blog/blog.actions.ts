import { createAction, props } from "@ngrx/store";
import { BlogEntity } from "./blog.models";

export const init = createAction("[Blog Page] Init");

export const loadBlogSuccess = createAction(
  "[Blog/API] Load Blog Success",
  props<{ blog: BlogEntity[] }>()
);

export const loadBlogFailure = createAction(
  "[Blog/API] Load Blog Failure",
  props<{ error: any }>()
);
