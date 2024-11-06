import { EntityAdapter, EntityState, Update, createEntityAdapter } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";

import * as BlogActions from "./blog.actions";
import { BlogEntity } from "./blog.models";

export const BLOG_FEATURE_KEY = "blog";

export interface State extends EntityState<BlogEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const blogAdapter: EntityAdapter<BlogEntity> = createEntityAdapter<BlogEntity>({
  sortComparer: (a: BlogEntity, b: BlogEntity) => Number.parseInt(b.date) - Number.parseInt(a.date),
});

export const initialState: State = blogAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const blogReducer = createReducer(
  initialState,
  on(BlogActions.loadBlogs, (state) =>
    blogAdapter.removeAll({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(BlogActions.loadBlogsSuccess, (state, { blog }) => blogAdapter.setAll(blog, { ...state, loaded: true })),
  on(BlogActions.loadBlogsFailure, (state, { error }) => ({ ...state, error })),
  on(BlogActions.createBlogSuccess, (state, { blog }) => {
    if (state.ids.some((id) => id == blog.id)) {
      return blogAdapter.updateOne(
        {
          id: blog.id,
          changes: { json: blog.json },
        } as Update<BlogEntity>,
        state
      );
    } else {
      return blogAdapter.addOne(blog, state);
    }
  })
);

export function reducer(state: State | undefined, action: Action) {
  return blogReducer(state, action);
}
