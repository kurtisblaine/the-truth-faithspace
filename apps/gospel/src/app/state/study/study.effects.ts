import { Injectable } from "@angular/core";
import {
  collection,
  collectionData,
  doc,
  DocumentData,
  DocumentReference,
  Firestore,
  setDoc,
} from "@angular/fire/firestore";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { from, map, mergeMap } from "rxjs";
import { StudyActions } from "./study.actions";
import { StudyEntity } from "./study.model";

@Injectable()
export class StudyEffects {
  public getStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudyActions.loadStudies),
      map(() => collection(this.database, "study")),
      mergeMap((data) => collectionData(data as any, { idField: "collectionId" })),
      map((data) => {
        return StudyActions.loadStudiesSuccess({
          study: data as StudyEntity[],
        });
      })
    )
  );

  public createStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudyActions.createStudy),
      map(({ study }) => {
        return {
          collection: doc(
            this.database,
            `study/${study.collectionId ? study.collectionId : study.id}`
          ) as DocumentReference<StudyEntity>,
          study,
        };
      }),
      mergeMap(({ collection, study }) => {
        const doc = from(setDoc<StudyEntity, DocumentData>(collection, study));
        return doc.pipe(map(() => study));
      }),
      // mergeMap((created) => from(getDoc(created))),
      map((document: StudyEntity) =>
        StudyActions.createStudySuccess({
          study: document,
        })
      )
    )
  );

  // public reload$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(StudyActions.createStudySuccess),
  //     map(() => StudyActions.loadStudys())
  //   )
  // );

  constructor(private readonly actions$: Actions, private database: Firestore) {}
}
