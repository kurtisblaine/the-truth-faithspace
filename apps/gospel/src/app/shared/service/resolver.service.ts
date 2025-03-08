import { inject } from "@angular/core";
import { collection, collectionData, Firestore } from "@angular/fire/firestore";
import { ResolveFn } from "@angular/router";
import { Observable } from "rxjs";
import { BlogEntity } from "../../state/blog/blog.models";

export const blogResolver: ResolveFn<BlogEntity[]> = (route, state) => {
  const database = inject(Firestore);
  const data = collection(database, "blog");
  const items = collectionData(data, { idField: "collectionId" });
  return items as Observable<BlogEntity[]>;
};
