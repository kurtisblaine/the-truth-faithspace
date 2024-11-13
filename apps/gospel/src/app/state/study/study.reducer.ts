import { createEntityAdapter, EntityAdapter, EntityState, Update } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import { StudyActions } from "./study.actions";
import { StudyEntity } from "./study.model";

export const studyFeatureKey = "study";

export interface State extends EntityState<StudyEntity> {
  id?: string;
  loaded: boolean;
  error?: string | null;
}

export const studyAdapter: EntityAdapter<StudyEntity> = createEntityAdapter<StudyEntity>({
  sortComparer: (a: StudyEntity, b: StudyEntity) => Number.parseInt(b.date) - Number.parseInt(a.date),
});

export const initialState: State = studyAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

export const reducer = createReducer(
  initialState,
  on(StudyActions.loadStudies, (state) =>
    studyAdapter.removeAll({
      ...state,
      loaded: false,
      error: null,
    })
  ),
  on(StudyActions.loadStudiesSuccess, (state, { study }) => studyAdapter.setAll(study, { ...state, loaded: true })),
  on(StudyActions.loadStudiesFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(StudyActions.createStudySuccess, (state, { study }) => {
    if (state.ids.some((id) => id == study.id)) {
      return studyAdapter.updateOne({ id: study.id, changes: { json: study.json } } as Update<StudyEntity>, state);
    } else {
      return studyAdapter.addOne(study, state);
    }
  })
);

// export const studyFeature = createFeature({
//   name: studyFeatureKey,
//   reducer,
// });

export function studyReducer(state: State | undefined, action: Action) {
  return reducer(state, action);
}
