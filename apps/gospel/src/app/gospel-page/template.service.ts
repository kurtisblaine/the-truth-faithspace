import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TemplateService {
  private map = new Map<string, any>();

  constructor() {}

  add(title: string, component: any) {
    this.map.set(title, component);
  }

  get(title: string) {
    return this.map.get(title);
  }
}
