import { Injectable, TemplateRef } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  private map = new Map<string, TemplateRef<any>>();

  constructor() {}

  add(title: string, template: TemplateRef<any>) {
    this.map.set(title, template);
  }

  get(title: string) {
    return this.map.get(title);
  }
}
