import { Component } from "@angular/core";
import { faBook, faBookmark, faCreditCard, faFileAudio } from "@fortawesome/free-solid-svg-icons";
import { SeoBaseComponent } from "shared";

@Component({
  selector: "blog-tract-page",
  templateUrl: "./tract-page.component.html",
  styleUrl: "./tract-page.component.scss",
  standalone: false,
})
export class TractPageComponent extends SeoBaseComponent {
  override keywords: string = "tracts, bookmarks, cards, reminder, print, truth, eternity";

  public zipFileIcon = faFileAudio;
  public bookIcon = faBook;
  public bookmarkIcon = faBookmark;
  public cardIcon = faCreditCard;

  constructor() {
    super();
  }
}
