import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../models/books";

export const BooksActions = createActionGroup({
  source: "Books",
  events: {
    "Load Books": props<{ id: string }>(),
    "Load Books Success": props<{ data: Book[] }>(),
    "Load Books Failure": props<{ error: unknown }>(),
  },
});

export const ScriptureActions = createActionGroup({
  source: "Scripture",
  events: {
    "Load Scripture": props<{ id: string }>(),
    "Load Scripture Success": props<{ data: Book[] }>(),
    "Load Scripture Failure": props<{ error: unknown }>(),
  },
});
