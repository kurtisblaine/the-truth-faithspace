import { createActionGroup, props } from "@ngrx/store";
import { Book } from "../../models/books";

export const BooksActions = createActionGroup({
  source: "Books",
  events: {
    "Load Books": props<{ id: string }>(),
    "Load Books Success": props<{ data: Book[] }>(),
    "Load Books Failure": props<{ error: unknown }>(),
  },
});
