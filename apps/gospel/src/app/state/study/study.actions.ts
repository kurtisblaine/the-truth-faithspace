import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { StudyEntity } from "./study.model";

export const StudyActions = createActionGroup({
  source: "Study",
  events: {
    "Load Studies": emptyProps(),
    "Load Studies Success": props<{ study: StudyEntity[] }>(),
    "Load Studies Failure": props<{ error: any }>(),
    "Create Study": props<{ study: StudyEntity }>(),
    "Create Study Success": props<{ study: StudyEntity }>(),
    "Create Study Failure": props<{ error: any }>(),
  },
});
