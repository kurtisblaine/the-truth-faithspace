import { Injectable, Injector, runInInjectionContext } from "@angular/core";
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
import { from, map, mapTo, mergeMap } from "rxjs";
import { toKebabCase } from "../state.config";
import { StudyActions } from "./study.actions";
import { StudyEntity } from "./study.model";

@Injectable()
export class StudyEffects {
  public getStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudyActions.loadStudies),
      mergeMap(() =>
        runInInjectionContext(this.injector, () => {
          const data = collection(this.database, "study");
          return collectionData(data, { idField: "collectionId" });
        })
      ),
      map((data) => {
        return StudyActions.loadStudiesSuccess({
          study: (data as StudyEntity[]).map((d) => ({ ...d, url: toKebabCase(d.title) })),
        });
      })
    )
  );

  public createStudy$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StudyActions.createStudy),
      mergeMap(({ study }) =>
        runInInjectionContext(this.injector, () => {
          const collection = doc(
            this.database,
            `study/${study.collectionId ? study.collectionId : study.id}`
          ) as DocumentReference<StudyEntity>;
          const doc$ = from(setDoc<StudyEntity, DocumentData>(collection, study));
          return doc$.pipe(mapTo(study));
        })
      ),
      map((document: StudyEntity) =>
        StudyActions.createStudySuccess({
          study: document,
        })
      )
    )
  );

  constructor(private readonly actions$: Actions, private database: Firestore, private injector: Injector) {}
}
