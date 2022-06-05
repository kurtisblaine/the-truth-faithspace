import { createAction, props } from "@ngrx/store";
import { BlogEntity } from "./blog.models";

export const loadBlogs = createAction("[Blog/API] Load Blog");

export const loadBlogsSuccess = createAction(
  "[Blog/API] Load Blog Success",
  props<{ blog: BlogEntity[] }>()
);

export const loadBlogsFailure = createAction(
  "[Blog/API] Load Blog Failure",
  props<{ error: any }>()
);

export const createBlog = createAction(
  "[Blog/API] Create Blog",
  props<{ blog: BlogEntity }>()
);

export const createBlogSuccess = createAction(
  "[Blog/API] Create Blog Success",
  props<{ blog: BlogEntity }>()
);

export const createBlogFailure = createAction(
  "[Blog/API] Create Blog Failure",
  props<{ error: any }>()
);
