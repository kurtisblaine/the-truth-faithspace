import { createActionGroup, props } from "@ngrx/store";
import { Chapter } from "../../models/chapters";

export const ChaptersActions = createActionGroup({
  source: "Chapters",
  events: {
    "Load Chapters": props<{ id: string; bookId: string }>(),
    "Load Chapters Success": props<{ data: Chapter[] }>(),
    "Load Chapters Failure": props<{ error: unknown }>(),
  },
});
