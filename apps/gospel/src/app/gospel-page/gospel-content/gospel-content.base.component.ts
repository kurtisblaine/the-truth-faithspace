import { inject } from "@angular/core";
import { BASE_URL } from "shared";

export class GospelContentBaseComponent {
  protected name = "";

  public keywords = "";
  public description = "";

  public baseUrl = inject(BASE_URL);
}
