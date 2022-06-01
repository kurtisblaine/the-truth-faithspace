import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import { createReducer, on, Action } from "@ngrx/store";

import * as BlogActions from "./blog.actions";
import { BlogEntity } from "./blog.models";

export const BLOG_FEATURE_KEY = "blog";

export interface State extends EntityState<BlogEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const blogAdapter: EntityAdapter<BlogEntity> =
  createEntityAdapter<BlogEntity>();

export const initialState: State = blogAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const blogReducer = createReducer(
  initialState,
  on(BlogActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(BlogActions.loadBlogSuccess, (state, { blog }) =>
    blogAdapter.setAll(blog, { ...state, loaded: true })
  ),
  on(BlogActions.loadBlogFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return blogReducer(state, action);
}
