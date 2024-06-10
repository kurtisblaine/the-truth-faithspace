import { createActionGroup, props } from "@ngrx/store";
import { Chapter } from "../../models/chapters";

export const ChaptersActions = createActionGroup({
  source: "Chapters",
  events: {
    "Select Chapter": props<{ id: string }>(),
    "Load Chapters": props<{ id: string; bookId: string }>(),
    "Load Chapters Success": props<{ data: Chapter[] }>(),
    "Load Chapters Failure": props<{ error: unknown }>(),
  },
});
