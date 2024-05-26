import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const BooksActions = createActionGroup({
  source: 'Books',
  events: {
    'Load Bookss': emptyProps(),
    'Load Bookss Success': props<{ data: unknown }>(),
    'Load Bookss Failure': props<{ error: unknown }>(),
  }
});
