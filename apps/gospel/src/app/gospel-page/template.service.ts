import { Injectable, TemplateRef } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  public templateRef: TemplateRef<any>;
  public title: string;

  constructor() {}
}
